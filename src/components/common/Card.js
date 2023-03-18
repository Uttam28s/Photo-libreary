import React from 'react'

export const AlbumCard = ({ title, onClick }) => {
    return (
        <div key={`${title}`}
            onClick={onClick}
            className='h-[10vh] shadow-lg flex items-center justify-center ease-in-out duration-300 hover:border-x-4 hover:bg-gray-400 cursor-pointer hover:bg-opacity-25'>
            <p className='font-bold text-xl'>{title}</p>
        </div>
    )
}

export const ImageCard = ({ data }) => {
    const { title, thumbnailUrl, id } = data
    return (
        <div key={`${title}-${id}`}
            className='relative shadow-lg ease-in-out duration-300 hover:border-x-4 hover:bg-gray-400 cursor-pointer hover:bg-opacity-25'>
            <img src={thumbnailUrl} className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 ' alt={title + id} />
            <p className='font-bold text-xl absolute bottom-0 p-[4%] bg-amber-100 hidden hover:inline'>{title}</p>
        </div>
    )
}