import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TBookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public id: string;

  @Prop({ required: true })
  public name: string;

  @Prop({ required: true })
  public author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
