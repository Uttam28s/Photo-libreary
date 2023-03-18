import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/common/Breadcrumbs'
import { ImageCard } from '../../components/common/Card'
import Header from '../../components/common/Header'
import Skeleton from '../../components/common/Skeleton'
import { useGetPhotosQuery } from '../../services/photos'

const GalleryPage = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const { data: galleryRecords, error, isLoading } = useGetPhotosQuery({ albumId: id })

    //handle error from api
    if (error) {
        return (
            <div> Right now we are facing some issue please connect after some time. </div>
        )
    }
    return (
        <div>
            <Header title={`${state?.name}, Check the list of your gallery! `} navigation={<Breadcrumbs />} />
            <div className='sm:p-8'>
                {isLoading ? <Skeleton /> : // display skeleton until status is loading
                    <div data-testid='gallery-image-wrapper' className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]'>
                        {galleryRecords.map(gallery =>
                            <ImageCard data={gallery} />)}
                    </div>}
            </div>
        </div>
    )
}

export default GalleryPage