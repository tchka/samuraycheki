/*React*/
import React from 'react'
/*Style*/
import s from './hash_tag.module.css'

const HashTags = props => {
    return (
            <a href={'/'} className={s.item}>
                {props.hashTag.name}
            </a>
    )
}

export default HashTags