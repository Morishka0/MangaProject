

export type MangaTypeType = {
    type: string,
    query: string
}
export type StatusType = {
    status: string,
    query: string
}
export type GenreType = {
    genre: string,
    query: string
}

export type MangaItemType = {
    title: string
    img: string
    type: MangaTypeType
    status: StatusType
    mainGenre: GenreType
    genres: GenreType[]
    description: string
    query: string
    chaptersCount: number
    views: number
    rating: number
    likes: number
    year: number
}