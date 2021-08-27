import { useQuery } from '@apollo/client'
import { GET_CATALOG_ITEMS } from '../../GQL/getCatalogItems'
import { ICatalog } from '../../InterfacesForGQL/ICatalog'
import classes from './Catalog.module.scss'

const Catalog = () => {
    const { data } = useQuery<ICatalog>(GET_CATALOG_ITEMS)
    const catalog = data?.getMangaItems.map(item => (
        <div className={classes.catalog__item}>
            <div className={classes.catalog__itemTite}></div>
        </div>
    ))

    return <>{catalog}</>
}

export default Catalog
