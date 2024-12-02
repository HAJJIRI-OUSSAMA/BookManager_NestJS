import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Book {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    genre: string;

    @Prop()
    publicationDate: Date;

    @Prop()
    price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
