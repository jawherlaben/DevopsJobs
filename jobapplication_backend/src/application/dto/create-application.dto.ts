import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateApplicationDto {
  
    @IsNotEmpty()
    @IsString()
    cv: string;
}
