import React from 'react'

const Button = ({ title, className, ...props }) => {
    return (
        <button className={`bg-cyan-500 hover:bg-cyan-600 rounded-md ${className}`} {...props}>{title}</button>
    )
}

export default Button