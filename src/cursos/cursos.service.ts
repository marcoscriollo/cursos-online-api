import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-cursos.dto';
import { UpdateCursoDto } from './dto/update-cursos.dto';
import { Curso } from './cursos.entity';
@Injectable()
export class CursosService {
    constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  create(createcursoDto: CreateCursoDto) {
    const category = this.cursoRepository.create(createcursoDto);
    return this.cursoRepository.save(category);
  }

  findAll() {
    return this.cursoRepository.find();
  }

  findOne(id: string) {
    return this.cursoRepository.findOne({ where: { id } });
  }

  async update(id: string, updatecursoDto: UpdateCursoDto) {
    const curso = await this.cursoRepository.findOne({ where: { id } });
    if (!curso) return null;
    Object.assign(curso, updatecursoDto);
    return this.cursoRepository.save(curso);
  }

  async remove(id: string) {
    const category = await this.cursoRepository.findOne({ where: { id } });
    if (!category) return null;
    return this.cursoRepository.remove(category);
  }
}

