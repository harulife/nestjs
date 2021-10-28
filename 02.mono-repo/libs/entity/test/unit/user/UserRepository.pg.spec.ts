import { Test, TestingModule } from "@nestjs/testing";
import { User } from "@app/entity/user/User.entity";
import { createQueryBuilder, getConnection, Repository } from "typeorm";
import { UserModule } from "@app/entity/user/UserModule";
import { UserQueryRepository } from "@app/entity/user/UserQueryRepository";
import { getPgTestTypeOrmModule } from "../../../getPgTestTypeOrmModule";

describe('UserQueryRepository', () => {
  let userRepository: Repository<User>;
  let userQueryRepository: UserQueryRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, getPgTestTypeOrmModule()],
    }).compile();

    userQueryRepository = module.get<UserQueryRepository>(UserQueryRepository);
    userRepository = module.get('UserRepository');
  });

  afterEach(async () => {
    await userRepository.clear();
  });

  afterAll(async () => {
    await getConnection().close();
  })

  it('save', async () => {
    // given
    const nickName = 'haru';
    const user = new User();
    user.nickName = nickName;

    // when
    const savedUser = await userRepository.save(user);

    // then
    expect(savedUser.id).toBeGreaterThanOrEqual(1);
  })
})
