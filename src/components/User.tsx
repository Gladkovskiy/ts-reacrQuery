import React, {FC} from 'react'
import {useParams} from 'react-router-dom'
import {useGetOneUser, usePostPosts} from '../http/query/users'

const User: FC = () => {
  const {id} = useParams<'id'>()
  const {data, isError, isLoading} = useGetOneUser(Number(id))
  const addPost = usePostPosts()

  if (isLoading) <h1>Загрузка...</h1>
  if (isError) <h1>Ошибка...</h1>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button
        onClick={() =>
          addPost.mutate({body: 'Всем привет', title: 'Приветствие', userId: 2})
        }
      >
        Добавить пост
      </button>

      {addPost.isSuccess ? (
        <h2>
          Отправлено
          <pre>{JSON.stringify(addPost.data, null, 2)}</pre>
        </h2>
      ) : null}
    </div>
  )
}

export default User
