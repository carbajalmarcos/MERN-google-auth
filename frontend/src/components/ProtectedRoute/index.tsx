import { useEffect, useState } from 'react';
import axios from 'axios'
import {
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from 'react-router-dom';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    console.log('protected')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(true);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('protected')

        axios(`${process.env.REACT_APP_BACKEND_URL_BASE}/isAuth`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        })
            .then(() => {
                setIsLoading(false)
            }).catch(error => {
                setIsLoading(true)
                navigate('login')
            });

    }, []);

    if (isLoading) return (
        <div className="flex items-center justify-center w-full h-screen m-auto">
            <h1>Cargando...</h1>
        </div>
    );

    return <Outlet/>;
};


export default index