import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { default as helmet } from 'helmet';
import { AppModule } from './src/app.module';
import { env } from 'process';

async function bootstrap() {
  // 支持https
  const httpsOptions = {
    // key: fs.readFileSync('./secrets/private-key.pem'),
    // cert: fs.readFileSync('./secrets/public-certificate.pem'),
  };

  // 跨域配置
  const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: '*',
  };
  const app = await NestFactory.create(AppModule, {
    cors: corsOptions,
    // httpsOptions,
  });

  // 全局前缀
  app.setGlobalPrefix('api/v1');

  // https://helmetjs.github.io/
  app.use(
    helmet({
      // crossOriginResourcePolicy: { policy: "same-site" }
      crossOriginResourcePolicy: false,
    }),
  );

  // 全局管道, 自动验证 https://docs.nestjs.com/techniques/validation#auto-validation
  app.useGlobalPipes(
    new ValidationPipe({
      // disableErrorMessages: true, // 禁用详细错误
      // whitelist: true, // https://docs.nestjs.com/techniques/validation#stripping-properties
      transform: true, // https://docs.nestjs.com/techniques/validation#transform-payload-objects
    }),
  );

  // hot reload
  /* if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  } */

  // 配置 swagger 文档
  if (env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('gcms API Doc')
      .setDescription('The service API description')
      .setVersion('1.0')
      .addSecurity('basic', {
        scheme: 'basic',
        type: 'http',
      })
      .addBasicAuth()
      .addBearerAuth()
      .addOAuth2()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-doc', app, document);
  }

  // 启动HTTP服务
  await app.listen(env.HTTP_PORT || 3000, '0.0.0.0');
}
bootstrap();
