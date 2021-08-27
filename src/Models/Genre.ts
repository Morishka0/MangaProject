import { getModelForClass, prop } from '@typegoose/typegoose'
import { Types } from 'mongoose'
import { Field, ObjectType } from 'type-graphql'


@ObjectType()
export class Genre {

    @Field(() => String)
    @prop()
    _id!: Types.ObjectId

    @Field()
    @prop()
    genre!: string

    @Field()
    @prop()
    query!: string
}

export const GenreModel = getModelForClass(Genre)
