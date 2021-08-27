import { Field, InputType } from 'type-graphql'
import "reflect-metadata"
import { Status } from '../Status'

@InputType()
export class StatusInput implements Partial<Status>  {

    @Field()
    status!: string

    @Field()
    query!: string
}

