import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create (@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return 'Cat created';
  }


  @Get('multiple-params')
  getMultipleParams(@Query() query): string {
    console.log(query)
    return `This is cat ${query.id} and ${query.name}`;
  }

  @Get(':id')
  getCat(@Param() params): string {
    return `This is cat ${params.id}`;
  }

  
}
