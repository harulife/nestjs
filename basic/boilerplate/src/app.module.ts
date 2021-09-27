import { Module } from '@nestjs/common';
import { PigController } from "./app.controller";
import { PigService } from "./app.service";

@Module({
  controllers: [ PigController ],
  providers: [ PigService ]
})

export class PigModule {}
