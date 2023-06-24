import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InputOrder } from './orders.dto';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany({
      include: {
        Asset: true,
      },
    });
  }

  create(input: InputOrder) {
    return this.prismaService.order.create({
      data: {
        asset_id: input.asset_id,
        price: input.price,
        status: OrderStatus.PENDING,
      },
    });
  }
}
