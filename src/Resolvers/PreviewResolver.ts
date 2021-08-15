import { PreviewItemInput } from '../Models/Inputs/PreviewItemInput'
import { PreviewItem, PreviewItemModel } from '../Models/PreviewItem'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import "reflect-metadata"




@Resolver()
class PreviewResolver {

    @Query(() => [PreviewItem])
    async getPreviewItems(): Promise<PreviewItem[]> {
        return PreviewItemModel.find({})
    }


    @Mutation(() => [PreviewItem])
    async addPreviewItem(@Arg("previewItemData", () => [PreviewItemInput]) PreviewItem: PreviewItemInput[]): Promise<PreviewItem[]> {
        const items = PreviewItemModel.insertMany(PreviewItem)
        return items
    }
}

export default PreviewResolver

