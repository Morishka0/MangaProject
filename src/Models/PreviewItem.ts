import { MangaItem } from './MangaItem'
import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { Types } from 'mongoose'




@ObjectType()
export class PreviewItem {

    @Field(() => String)
    @prop()
    _id!: Types.ObjectId


    @Field()
    @prop()
    img!: string

    @Field(() => MangaItem)
    @prop({ ref: () => MangaItem })
    mangaItem!: Ref<MangaItem>
}



export const PreviewItemModel = getModelForClass(PreviewItem)