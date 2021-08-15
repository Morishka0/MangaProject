import { gql } from '@apollo/client'


export const GET_PREVIEW_ITEM = gql`
query getPreviewItems {
    getPreviewItems {
      img
      title
    }
  }
`