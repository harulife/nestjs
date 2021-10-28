import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { User } from "@app/entity/user/User.entity";
import { plainToClass } from "class-transformer";
import { UserName } from "@app/entity/user/UserName";

@EntityRepository(User)
export class UserQueryRepository extends Repository<User> {
  async findNickName(userId: number): Promise<UserName>{
    const queryBuilder = createQueryBuilder()
      .select(['nickname'])
      .from(User, 'user')
      .where('user.id =:id', { id: userId });

    const row = await queryBuilder.getOne();
    return plainToClass(UserName, row);
  }
}
