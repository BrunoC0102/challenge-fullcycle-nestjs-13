import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InputAsset } from './assets.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.asset.findMany();
  }

  create(input: InputAsset) {
    return this.prismaService.asset.create({
      data: {
        id: input.id,
        symbol: input.symbol,
      },
    });
  }
}
