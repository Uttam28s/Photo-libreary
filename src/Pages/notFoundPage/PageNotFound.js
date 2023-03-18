import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'

const PageNotFound = () => {
    return (
        <div>
            <h1>
                Page Not Found
            </h1>
            <Link to={routes.login}>Home</Link>
        </div>
    )
}

export default PageNotFound