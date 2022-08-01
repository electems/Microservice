/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';
import { Inject } from 'typescript-ioc';
import { Userdto } from './userDto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Inject
  @Get()
  public async getUers(): Promise<Array<User>> {
    return this.userService.getUsers();
  }
  @Post('/')
  public async createUser(@Body() body: Userdto): Promise<User> {
    return this.userService.creatUser(body);
  }
  @Get('/:id')
  public async getUser(id: any) {
    return this.userService.getUser(Number(id));
  }
}
