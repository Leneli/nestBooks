import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

import { IBook } from 'src/types/IBook';
import { Book, TBookDocument } from './schemas/book.schema';
import { TUpdateBookResponse } from 'src/types/TUpdateBookResponse';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<TBookDocument>,
    @InjectConnection() private connection: Connection,
  ) {
    //
  }

  async setBook(book: IBook): Promise<TBookDocument> {
    const todo = new this.BookModel(book);
    return todo.save();
  }

  async getAll(): Promise<TBookDocument[]> {
    return this.BookModel.find().exec();
  }

  updateBook(id: string, data: IBook): TUpdateBookResponse {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  deleteBook(id: string): TUpdateBookResponse {
    return this.BookModel.findOneAndRemove({ _id: id });
  }
}
