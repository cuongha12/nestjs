import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUsers } from './dto/createUser.dto';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: createUsers, metadata: ArgumentMetadata) {
    const users = parseInt(value.age.toString());
    if (isNaN(users)) {
      console.log(` ${value.age} is not a number`);
      throw new HttpException('Invalid data',HttpStatus.BAD_REQUEST)    
    }
    console.log('xxxx',users);
    return {...value, age: users};
  }
}
