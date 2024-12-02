import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){}

    async findAll(): Promise<Book[]>{
        const book = await this.bookModel.find();
        return book;
    }
}
