import { getModelForClass, prop } from '@typegoose/typegoose'
import { Types } from 'mongoose'
import { Field, ObjectType } from 'type-graphql'


@ObjectType()
export class Type {
    @Field(() => String)
    @prop()
    _id!: Types.ObjectId

    @Field()
    @prop()
    type!: string

    @Field()
    @prop()
    query!: string
}


export const TypeModel = getModelForClass(Type)
