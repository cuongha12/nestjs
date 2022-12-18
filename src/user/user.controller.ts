import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { createUsers } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/test')
  getUsers(@Query('page') page: string) {
    console.log(page);
    return {
      name: 'cuong',
      email: 'cuong@gmail.com',
    };
  }
  @Get('')
  getUser() {
    return this.userService.getUser();
  }
  @Post('test')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: createUsers) {
    console.log(userData);
  }
  @Post()
  createUsers(@Body(UserPipe) userData: createUsers) {
    console.log(userData);
    return this.userService.createUsers(userData);
  }
  @Get('/test/:id')
  getUsersID(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
  }
  @Get(':id')
  getUsersId(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUsersId(id);
    if(!user){
     throw new HttpException('User not fonds' , HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
