import { FindManyOptions, FindOptionsOrder } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { User } from 'src/typeorm';

export class FilterUserDto implements FindManyOptions<User> {
  order?: FindOptionsOrder<User>;
  skip?: number;
  take?: number;
}

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username?: string;

  @IsNotEmpty()
  @MinLength(8)
  password?: string;

  @IsNotEmpty()
  @IsEmail()
  email?: string;
}
