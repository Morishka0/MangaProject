import { PreviewItemInput } from '../Models/Inputs/PreviewItemInput'
import { PreviewItem, PreviewItemModel } from '../Models/PreviewItem'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import "reflect-metadata"




@Resolver()
class PreviewResolver {

    @Query(() => [PreviewItem])
    async getPreviewItems(): Promise<PreviewItem[]> {
        return PreviewItemModel.find().populate("mangaItem")
    }

    @Mutation(() => [PreviewItem])
    async addPreviewItem(@Arg("previewItemData", () => [PreviewItemInput]) PreviewItems: PreviewItemInput[]): Promise<PreviewItem[]> {
        const items = PreviewItemModel.insertMany(PreviewItems)
        return items
    }
}

export default PreviewResolver

