import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { PigModule } from "./pig/pig.module";

@Module({
  imports: [PigModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware, ) // 쉼표로 구분지어 여러 미들웨어 바인딩 가능
      .forRoutes('pig')
  }
}
