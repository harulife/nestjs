import { Controller, Get } from '@nestjs/common';
import { PigService } from "./app.service";

@Controller('pig')
export class PigController {
  constructor(private readonly pigService: PigService) {}

  @Get('pigs')
  getPigs(): string {
    return this.pigService.getPigs();
  }

  @Get('pig')
  getPig(): string {
    return this.pigService.getPig();
  }
}
