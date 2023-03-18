import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

//This Components help to create a custom breadcrumb.
const Breadcrumbs = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    //split url so we can use it in display
    const pathnames = pathname.split("/").filter(Boolean);
    pathnames.splice(-1)
    return (
        <div className='flex items-center'>
            {/* if there are no child route then just show first page only */}
            {
                pathnames.length ? (
                    <p className='cursor-pointer text-sky-500' onClick={() => navigate(routes.album)}>Albums</p>
                ) : (
                    <p> Albums </p>
                )
            }
            <p>/</p>
            {
                pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <p key={name}>{name}</p>
                    ) : (
                        <p key={name} onClick={() => navigate(routeTo)}>
                            {name}
                        </p>
                    );
                })
            }
        </div>
    )
}

export default Breadcrumbs