import React from 'react'
import './custom-button.scss'

const CustomButton = ({children, ...othersprops}) => (
    <button className="custom-button" {...othersprops}>
{children}
    </button>
)
export default CustomButton