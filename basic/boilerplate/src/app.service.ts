import { Injectable } from '@nestjs/common';
import { Pig } from "./interface/app.interface";
@Injectable()
export class PigService {
  private readonly pigs: Pig[] = [];

  createPig(pig: Pig){
    this.pigs.push(pig)
  }

  getPigs(): Pig[] {
    return this.pigs;
  }

  getPig(name: string): Pig {
    return this.pigs.find(pig => pig.name === name)
  }
}
