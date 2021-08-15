import { PreviewItem } from '../PreviewItem'
import { Field, InputType } from 'type-graphql'
import "reflect-metadata"

@InputType()
export class PreviewItemInput implements Partial<PreviewItem>  {

    @Field(() => String)
    title!: string

    @Field(() => String)
    img!: string
}

