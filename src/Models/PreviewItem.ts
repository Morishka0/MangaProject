import { getModelForClass, prop } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'




@ObjectType()
export class PreviewItem {
    @Field()
    @prop()
    title!: string

    @Field()
    @prop()
    img!: string

}



export const PreviewItemModel = getModelForClass(PreviewItem)