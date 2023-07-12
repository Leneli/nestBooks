import { HydratedDocument, QueryWithHelpers } from 'mongoose';
import { TBookDocument } from 'src/books/schemas/book.schema';

export type TUpdateBookResponse = QueryWithHelpers<
  HydratedDocument<TBookDocument> | null,
  HydratedDocument<TBookDocument>,
  unknown,
  TBookDocument
>;
