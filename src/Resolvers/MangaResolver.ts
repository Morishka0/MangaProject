import { MangaItemInput } from './../Models/Inputs/MangaItemInput'
import { MangaItem, MangaItemModel } from '../Models/MangaItem'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import "reflect-metadata"




@Resolver()
class MangaResolver {

    @Query(() => [MangaItem])
    async getMangaItems(): Promise<MangaItem[]> {
        return MangaItemModel.find({}).populate("type").populate("status").populate("genres").populate("mainGenre")
    }

    @Mutation(() => [MangaItem])
    async addMangaItem(@Arg("mangaItemData", () => [MangaItemInput]) MangaItem: MangaItemInput[]): Promise<MangaItem[]> {
        const items = MangaItemModel.insertMany(MangaItem)
        return items
    }
}

export default MangaResolver

