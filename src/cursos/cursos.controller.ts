import { Controller,Post,Get,Put,Delete,Body, Param } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursoDto } from './dto/update-cursos.dto';
import { CursosService } from './cursos.service';
@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursosDto: CreateCursoDto) {
    return this.cursosService.create(createCursosDto);
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatecursoDto: UpdateCursoDto) {
    return this.cursosService.update(id, updatecursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(id);
  }
}

