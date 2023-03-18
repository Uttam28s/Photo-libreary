import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import { localStorageKey, setJsonItem } from '../../helper/localStorage'
import { routes } from '../../routes/routes'
import { fetchUserList } from '../../services/user'

const Auth = () => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    // Function handles input fields
    const handleInputChange = useCallback((e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }, []);

    //Function handle Login.
    const onLogin = useCallback(() => {
        setIsLoading(true)
        // check if user add email and password or not.
        if (userData.email && userData.username) {
            fetchUserList(userData).then(res => {
                if (res && res.length) { // Check we have user or not.
                    setJsonItem(localStorageKey.user, res[0])
                    navigate(routes.album)
                } else {
                    toast.error('User not found')
                }
                setIsLoading(false)
            }
            ).catch(e => { // api error handling
                setIsLoading(false)
                toast.error(`${e}`)
            })
        }
        else { // user not fill any field of auth.
            setIsLoading(false)
            toast.error('Please enter a username and email address!')
        }
    }, [userData, navigate]);

    return (
        <div className='w-full h-[100vh] shadow-2xl rounded-md flex justify-center items-center md:w-3/6 md:h-[50vh] md:absolute md:top-2/4 md:left-1/2 md:-translate-x-2/4 md:-translate-y-1/2 bg-gray-400'>
            <div className='text-center'>
                <Input
                    label='Email'
                    type='email'
                    name='email'
                    required={true}
                    placeholder='Enter Email...'
                    onChange={(e) => handleInputChange(e)}
                />
                <Input
                    label='Username'
                    type='text'
                    name='username'
                    required={true}
                    placeholder='Enter Username...'
                    onChange={(e) => handleInputChange(e)}
                />
                <Button
                    onClick={onLogin}
                    disabled={isLoading}
                    className='mt-[6%] w-full p-[3%] text-white'
                    title={isLoading ? 'Loading ...' : 'Login'} />
            </div>
        </div>
    )
}

export default Auth