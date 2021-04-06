/*React*/
import React from 'react'
/*Style*/
import s from './hash_tag.module.css'

const HashTags = props => {
    return (
            <span className={s.item}>
                {props.hashTag}
            </span>
    )
}

export default HashTags