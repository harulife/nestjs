import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PigController } from "./pig.controller";
import { PigService } from "./pig.service";
import { LoggerMiddleware } from "../common/middleware/logger.middleware";
import { APP_FILTER } from '@nestjs/core'

@Module({
  controllers: [ PigController ],
  providers: [ PigService ]
})

export class PigModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('pig')
  }
}
