import { getModelForClass, prop } from '@typegoose/typegoose'
import { Types } from 'mongoose'
import { Field, ObjectType } from 'type-graphql'


@ObjectType()
export class Status {
    @Field(() => String)
    @prop()
    _id!: Types.ObjectId

    @Field()
    @prop()
    status!: string

    @Field()
    @prop()
    query!: string
}

export const StatusModel = getModelForClass(Status)
