import { Injectable } from '@nestjs/common';
import { IBook } from 'src/types/IBook';

@Injectable()
export class BooksService {
  private readonly books: IBook[] = [];

  async setBook(book: IBook): Promise<IBook> {
    return book;
  }

  async getAll(): Promise<IBook[]> {
    return this.books;
  }
}
