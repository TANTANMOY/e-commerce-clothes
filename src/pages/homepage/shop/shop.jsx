import React, { Component } from 'react'
import Shop_data from './shop-data'
import Preview from '../../../components/preview/preview'

 class Shop extends Component {
     constructor(props) {
         super(props);
         this.state = {
             collections: Shop_data
              
         }
     }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...othercollectionsProps}) => (
                        <Preview key={id} {...othercollectionsProps} />
                    ))
                }
            </div>
        )
    }
}
export default Shop