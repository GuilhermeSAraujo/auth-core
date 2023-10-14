import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		const secret = process.env.SECRET;

		try {
			jwt.verify(token, secret);
		} catch {
			throw new UnauthorizedException();
		}

		return true;
	}

	private extractTokenFromHeader(request: any): string {
		if (!request.headers.authorization) {
			throw new UnauthorizedException();
		}
		return request.headers.authorization.split(' ')[1];
	}
}

export default AuthGuard;