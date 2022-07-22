import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {useGetUsers} from '../http/query/users'

const UserList: FC = () => {
  const {data, isError, isLoading} = useGetUsers()
  const nav = useNavigate()

  if (isLoading) <h1>Загрузка...</h1>
  if (isError) <h1>Ошибка...</h1>

  return (
    <div>
      {data?.map(user => (
        <div key={user.id} onClick={() => nav(`/users/${user.id}`)}>
          {user.username} email {user.email}
          <pre>{JSON.stringify(user.address, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}

export default UserList
