import { useNavigate, useParams, useLocation } from 'react-router-dom';

export type { Params } from 'react-router-dom'

export const useRouter = () => {

  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  return {
    location,
    params,
    navigate
  }
}
