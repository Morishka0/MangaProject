import { useQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { GET_PREVIEW_ITEM } from '../../GQL/getPreviewItems'
import { IPReviewItems } from '../../InterfacesForGQL/IPreviewItems'
import classes from './Preview.module.scss'

const Preview: React.FC = () => {
    const [title, setTitle] = useState('')
    const { data } = useQuery<IPReviewItems>(GET_PREVIEW_ITEM)
    let initialTranslate = 20
    const previewItems = data?.getPreviewItems.map((item, index) => {
        if (index <= 3) {
            initialTranslate += 30
        } else if (index > 4) {
            initialTranslate -= 30
        }
        return (
            <div
                onMouseEnter={() => setTitle(item.title)}
                onMouseLeave={() => setTitle('')}
                style={{
                    backgroundImage: `url(${item.img})`,
                    transform: `translateY(${initialTranslate}px)`,
                }}
                className={classes.preview__item}
            ></div>
        )
    })
    return (
        <main className={classes.preview}>
            <div className={classes.preview__items}>{previewItems}</div>
            <div
                className={classes.preview__title}
                style={{ opacity: title ? 1 : 0 }}
            >
                {title}
            </div>
        </main>
    )
}

export default Preview
