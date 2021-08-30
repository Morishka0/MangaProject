import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { withRouter } from 'react-router'
import { GET_MANGA_ITEM } from '../../GQL/getMangaItem'
import { IMangaItem } from '../../InterfacesForGQL/IMangaItem'
import classes from './MangaItem.module.scss'
type PropsType = {
    match: any
}

const MangaItem: FC<PropsType> = ({ match }) => {
    const queryTitle = match.params.title

    const { data } = useQuery<IMangaItem>(GET_MANGA_ITEM, {
        variables: { getMangaItemQuery: queryTitle },
    })
    const mangaItem = data?.getMangaItem

    return !mangaItem ? (
        <div className=''>Жопа</div>
    ) : (
        <div className={classes.item}>
            <div className={classes.item__title}>{mangaItem.title}</div>
        </div>
    )
}

export default withRouter(MangaItem)
