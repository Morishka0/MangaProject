import { MangaItem } from './../MangaItem'
import { Field, Float, InputType, Int } from 'type-graphql'
import { Types } from 'mongoose'




@InputType()
export class MangaItemInput implements Partial<MangaItem> {

    @Field()
    title!: string

    @Field()
    img!: string

    @Field(() => String)
    type!: Types.ObjectId

    @Field(() => String)
    status!: Types.ObjectId

    @Field(() => String)
    mainGenre!: Types.ObjectId

    @Field(() => [String])
    genres!: Types.ObjectId[]

    @Field()
    query!: string

    @Field()
    description!: string

    @Field(() => Int)
    chaptersCount!: number

    @Field(() => Int)
    views!: number

    @Field(() => Float)
    rating!: number

    @Field(() => Int)
    likes!: number

    @Field(() => Int)
    year!: number
}


