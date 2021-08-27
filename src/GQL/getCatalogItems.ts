import { gql } from '@apollo/client'


export const GET_CATALOG_ITEMS = gql`
query getCatalogItems {
  getMangaItems {
    title
    img
    type {
      type
      query
    }
    _id
    mainGenre {
      genre
      query
    }
    query
    rating
  }
}
`