import { prop } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { Genre } from './Genre'
import { Status } from './Status'
import { Type } from './Type'



@ObjectType()
export class Filters {
    @Field(() => [Genre])
    @prop()
    genres!: Genre[]

    @Field(() => [Type])
    @prop()
    types!: Type[]

    @Field(() => [Status])
    @prop()
    statuses!: Status[]
}