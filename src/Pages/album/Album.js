import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumCard } from '../../components/common/Card'
import Header from '../../components/common/Header'
import Skeleton from '../../components/common/Skeleton'
import { getJsonItem, localStorageKey } from '../../helper/localStorage'
import { routes } from '../../routes/routes'
import { useGetAlbumsQuery } from '../../services/albums'

const AlbumPage = () => {
    const user = useMemo(() => getJsonItem(localStorageKey.user), [])
    const navigate = useNavigate();
    const { data: albumsRecord, error, isLoading } = useGetAlbumsQuery({ userId: user?.id })

    const handleOnClick = (data) => {
        navigate(`${routes.gallery}/${data?.id}`, { state: { name: user.name } })
    }

    //handle error from api
    if (error) {
        return (
            <div> Right now we are facing some issue please connect after some time. </div>
        )
    }
    return (
        <div>
            <Header title={`${user?.name}, Check the list of your Albums! `} />
            <div className='sm:p-8'>
                {isLoading ? <Skeleton /> : // display skeleton until status is loading
                    <div data-testid='album-wrapper' className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]'>
                        {albumsRecord.map(album =>
                            <AlbumCard title={album?.title} onClick={() => handleOnClick(album)} />)}
                    </div>}
            </div>
        </div>
    )
}

export default AlbumPage