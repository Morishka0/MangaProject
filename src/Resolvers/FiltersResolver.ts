import { GenreInput } from './../Models/Inputs/GenreInput'
import { Genre, GenreModel } from './../Models/Genre'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Filters } from '../Models/Filters'
import { Type, TypeModel } from '../Models/Type'
import { Status, StatusModel } from '../Models/Status'
import { StatusInput } from '../Models/Inputs/StatusInput'
import { TypeInput } from '../Models/Inputs/TypeInput'
import "reflect-metadata"




@Resolver()
class FiltersResolver {

    @Query(() => Filters)
    async getFilters(): Promise<Filters> {
        const genres = await GenreModel.find()
        const types = await TypeModel.find()
        const statuses = await StatusModel.find()
        return { genres, types, statuses }
    }

    @Mutation(() => [Genre])
    async addGenres(@Arg("genreData", () => [GenreInput]) Genres: GenreInput[]): Promise<Genre[]> {
        const items = await GenreModel.insertMany(Genres)
        return items
    }
    
    @Mutation(() => [Status])
    async addStatuses(@Arg("StatusData", () => [StatusInput]) Statuses: StatusInput[]): Promise<Status[]> {
        const items = await StatusModel.insertMany(Statuses)
        return items
    }

    @Mutation(() => [Type])
    async addTypes(@Arg("TypeData", () => [TypeInput]) Types: TypeInput[]): Promise<Type[]> {
        const items = await TypeModel.insertMany(Types)
        return items
    }


}

export default FiltersResolver