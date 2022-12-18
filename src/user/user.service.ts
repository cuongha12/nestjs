import { Injectable } from '@nestjs/common';
import { CreateUserType } from './type';

@Injectable()
export class UserService {
  private fakeUser = [
    {
      name: 'John',
      email: 'john@example.com',
    },
    {
      name: 'John',
      email: 'john@example.com',
    },
  ];

  getUser() {
    return this.fakeUser;
  }
  createUsers(userDataList: CreateUserType) {
    return this.fakeUser.push(userDataList);
  }
  getUsersId(id: number) {
    // return { id: id, name: 'jon', email: 'cuong@gmail.com' };
    return null;
  }
}
