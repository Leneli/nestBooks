import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { IBook } from 'src/types/IBook';
import { IReqParams } from 'src/types/IReqParams';
import { TBookDocument } from './schemas/book.schema';
import { TUpdateBookResponse } from 'src/types/TUpdateBookResponse';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  public findAll(): Promise<TBookDocument[]> {
    return this.booksService.getAll();
  }

  @Post()
  public create(@Body() book: IBook): Promise<TBookDocument> {
    return this.booksService.setBook(book);
  }

  @Put(':id')
  public update(
    @Param() { id }: IReqParams,
    @Body() body: IBook,
  ): TUpdateBookResponse {
    return this.booksService.updateBook(id, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: IReqParams): TUpdateBookResponse {
    return this.booksService.deleteBook(id);
  }
}
