import axios from 'axios'
import {
    useNavigate,
} from 'react-router-dom';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigation = useNavigate()
    const handleLogout = async () =>{
       await axios(`${process.env.REACT_APP_BACKEND_URL_BASE}/auth/logout`,{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          })
        sessionStorage.clear()
        navigation('/login')
    }
  return (
    <div className='flex justify-end w-full h-8 '>
        <button className='px-4 py-2 text-white rounded bg-slate-400 ' onClick={handleLogout} >
            Logout
        </button>
    </div>
  )
}

export default index
