import { gql } from '@apollo/client'

export const GET_MANGA_ITEM = gql`
query getMangaItem($getMangaItemQuery: String!) {
  getMangaItem(query: $getMangaItemQuery) {
    title
    img
    type {
      type
      query
    }
    status {
      status
      query
    }
    mainGenre {
      genre
      query
    }
    genres {
      genre
      query
      _id
    }
    description
    query
    chaptersCount
    views
    rating
    likes
    year
  }
}

`