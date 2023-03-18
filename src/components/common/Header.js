import React from 'react'
import { useNavigate } from 'react-router-dom';
import { localStorageKey, removeItem } from '../../helper/localStorage';
import { routes } from '../../routes/routes';
import Button from './Button'
import LogoutSvg from '../../assets/svg/logout.svg'

const Header = ({ title, navigation }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-between items-center p-5 shadow-md sm:flex-row'>
            {navigation ? <div className='place-self-center'>{navigation}</div> : ''}
            <h3 className='text-lg font-bold sm:text-2xl place-self-center'>{title}</h3>
            <Button
                title={<img src={LogoutSvg} alt="logout Logo" />}
                onClick={() => {
                    removeItem(localStorageKey.user);
                    navigate(routes.login)
                }}
                className='w-12 h-12 mr-[2%] p-2 rounded-full' />
        </div>
    )
}

export default Header