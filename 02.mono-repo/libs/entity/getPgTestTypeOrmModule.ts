import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export function getPgTestTypeOrmModule (){
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    entities: [__dirname + 'src/**/*.entity.ts'],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy()
  })
}
