import { Controller, Body, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from 'src/types/IBook';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(): Promise<IBook[]> {
    return this.booksService.getAll();
  }

  @Post()
  create(@Body() book: IBook) {
    this.booksService.setBook(book);
  }
}
