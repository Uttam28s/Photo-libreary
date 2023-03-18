import React from 'react'

const Input = ({ id, label, ...props }) => {
    return (
        <div className='mb-[8%] flex justify-between flex-col'>
            <label className='mb-[2%]' htmlFor={id}>{label}</label>
            <input {...props} className='focus-visible:outline-none p-[4%]' />
        </div>
    )
}

export default Input;