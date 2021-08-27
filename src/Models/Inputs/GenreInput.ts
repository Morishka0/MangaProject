import { Field, InputType } from 'type-graphql'
import "reflect-metadata"

import { Genre } from '../Genre'

@InputType()
export class GenreInput implements Partial<Genre>  {

    @Field()
    genre!: string

    @Field()
    query!: string
}

