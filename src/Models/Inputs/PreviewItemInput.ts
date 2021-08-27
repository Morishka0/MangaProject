import { PreviewItem } from '../PreviewItem'
import { Field, InputType } from 'type-graphql'
import "reflect-metadata"
import { Types } from 'mongoose'

@InputType()
export class PreviewItemInput implements Partial<PreviewItem>  {

    @Field(() => String)
    title!: string

    @Field(() => String)
    mangaItem!: Types.ObjectId
}

