import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { ClientsService } from './clients.service';
import { env } from 'process';

function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class ClientAuthGuard implements CanActivate {
  private readonly logger = new Logger(ClientAuthGuard.name);
  private extractTokenFromHeader = extractTokenFromHeader;

  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private clientService: ClientsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // todo：check client id and secret
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: env.JWT_SECRET,
      });
      // 💡 在这里我们将 payload 挂载到请求对象上
      // 以便我们可以在路由处理器中访问它
      const client = await this.clientService.getClient(payload.id);
      request['client'] = client;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
