import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Types } from 'mongoose'
import { Field, Float, Int, ObjectType } from 'type-graphql'
import { Genre } from './Genre'
import { Status } from './Status'
import { Type } from './Type'




@ObjectType()
export class MangaItem {
    @Field(() => String)
    @prop()
    _id!: Types.ObjectId

    @Field()
    @prop()
    title!: string

    @Field()
    @prop()
    img!: string

    @Field(() => Type)
    @prop({ ref: () => Type })
    type!: Ref<Type>

    @Field(() => Status)
    @prop({ ref: () => Status })
    status!: Ref<Status>

    @Field(() => Genre)
    @prop({ ref: () => Genre })
    mainGenre!: Ref<Genre>

    @Field(() => [Genre])
    @prop({ ref: () => Genre })
    genres!: Ref<Genre>[]

    @Field()
    @prop()
    description!: string

    @Field()
    @prop()
    query!: string

    @Field(() => Int)
    @prop()
    chaptersCount!: number

    @Field(() => Int)
    @prop()
    views!: number

    @Field(() => Float)
    @prop()
    rating!: number

    @Field(() => Int)
    @prop()
    likes!: number

    @Field(() => Int)
    @prop()
    year!: number

}



export const MangaItemModel = getModelForClass(MangaItem)