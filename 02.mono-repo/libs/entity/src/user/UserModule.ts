import { User } from "@app/entity/user/User.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserQueryRepository } from '@app/entity/user/UserQueryRepository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserQueryRepository])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: [],
})
export class UserModule {}
