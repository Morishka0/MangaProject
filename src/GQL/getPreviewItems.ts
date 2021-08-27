import { gql } from '@apollo/client'


export const GET_PREVIEW_ITEMS = gql`
query getPreviewItems {
  getPreviewItems {
    mangaItem {
      title
      query
    }
    img
  }
  }
`