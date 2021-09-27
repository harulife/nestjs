import { Injectable } from '@nestjs/common';

@Injectable()
export class PigService {
  getPigs(): string {
    return 'Get Many pigs!';
  }

  getPig(): string {
    return 'Get One pig!';
  }
}
