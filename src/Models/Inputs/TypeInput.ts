import { Field, InputType } from 'type-graphql'
import "reflect-metadata"

import { Type } from '../Type'

@InputType()
export class TypeInput implements Partial<Type>  {

    @Field()
    type!: string

    @Field()
    query!: string
}

