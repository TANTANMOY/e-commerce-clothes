import React from 'react'
import './preview.scss'
import Collection from '../collection/collection'

 const Preview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
{
    items.filter((item,idx) => idx < 4) 
    .map(({id,...itemProps}) => (
        <Collection key={id} {...itemProps} />
    ))
}
            </div>
        </div>
    )
}
export default Preview