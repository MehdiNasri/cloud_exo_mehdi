import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, UpdateResult, DeleteResult} from 'typeorm'
import  {User} from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm/dist/common';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo : Repository<User>){}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    return await this.userRepo.create(createUserDto);
  }

  async findAll() : Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number) : Promise<User>{
    return await this.userRepo.findOneBy({id: id});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return await this.userRepo.update(id,updateUserDto);
  }

  async remove(id: number) : Promise<DeleteResult>{
    return await this.userRepo.delete(id);
  }
}
