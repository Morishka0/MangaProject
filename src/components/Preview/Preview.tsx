import { useQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GET_PREVIEW_ITEM } from '../../GQL/getPreviewItems'
import { IPReviewItems } from '../../InterfacesForGQL/IPreviewItems'
import classes from './Preview.module.scss'

type TypeTheme = {
    theme: string
    mainColor: string
    iconColor: string
    textColor: string
    openHeader: string
}

type PropsType = {
    menu: boolean
    theme: TypeTheme
}

const Preview: React.FC<PropsType> = ({ menu, theme }) => {
    const [title, setTitle] = useState('')
    const { data } = useQuery<IPReviewItems>(GET_PREVIEW_ITEM)

    console.log(data)

    let initialTranslate = 20
    const previewItems = data?.getPreviewItems.map((item, index) => {
        if (index <= 3) {
            initialTranslate += 30
        } else if (index > 4) {
            initialTranslate -= 30
        }
        return (
            <NavLink
                onMouseEnter={() => {
                    setTimeout(() => {
                        setTitle(item.title)
                    }, 100)
                }}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setTitle('')
                    }, 100)
                }}
                to={`manga/mangaItem/${title}`}
                style={{
                    transform: `translateY(${initialTranslate}px)`,
                }}
                className={
                    menu
                        ? classes.preview__item + ' ' + classes.active
                        : classes.preview__item
                }
            >
                <img src={item.img} className={classes.preview__img} alt='' />
            </NavLink>
        )
    })
    return (
        <main className={classes.preview}>
            <div className={classes.preview__items}>{previewItems}</div>
            <div className={classes.preview__footer}>
                <div className={classes.preview__title}>
                    {title ? title : 'Мариночка красотка'}
                </div>
                <NavLink
                    style={{ color: theme.iconColor }}
                    to='/manga'
                    className={classes.preview__catalog}
                >
                    Каталог стрелка
                </NavLink>
            </div>
        </main>
    )
}

export default Preview
