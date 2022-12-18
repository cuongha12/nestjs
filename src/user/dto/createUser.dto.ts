import { IsNotEmpty ,IsEmail,IsNumber} from "class-validator";




export class createUsers {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  age:number;
}
