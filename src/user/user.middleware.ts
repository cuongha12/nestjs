import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.headers.authorization);
    const {authorization} = req.headers;
    if(!authorization)
      throw new HttpException('No authorization',HttpStatus.FORBIDDEN);
    if(authorization==="123"){
      next();
    }else{
      throw new HttpException('Invalid authorization',HttpStatus.FORBIDDEN)
    }
  }
}
