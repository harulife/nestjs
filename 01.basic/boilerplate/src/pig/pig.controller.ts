import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PigService } from "./pig.service";
import { CreatePigDto } from "./dto/pig.dto";
import { Pig } from "./interface/pig.interface";

@Controller('pig')
export class PigController {
  constructor(private readonly pigService: PigService) {}

  @Post()
  create(@Body() createPigDto: CreatePigDto) {
    this.pigService.createPig(createPigDto);
  }

  @Get('pigs')
  getPigs(): Pig[] {
    return this.pigService.getPigs();
  }

  @Get(':name')
  @HttpCode(201)
  getPig(@Param() params): Pig {
    console.log(params.name);
    return this.pigService.getPig(params.name);
  }
}
