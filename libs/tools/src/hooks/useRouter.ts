import {useNavigate, useParams, useLocation} from 'react-router-dom';

export function useRouter () {

  const navigate  =  useNavigate()
  const params = useParams()
  const location = useLocation()

  return {
    location,
    params,
    navigate
  }
}
