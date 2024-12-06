import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  SetMetadata,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { ClientsService } from './clients.service';

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
    return true;
  }
}
