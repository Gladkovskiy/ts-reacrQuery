import {$host} from '.'
import {IPosts, IPostsResp, IUsers} from '../../types/IUsers'

export const getUsers = async () => {
  const {data} = await $host.get<IUsers[]>('/users')
  return data
}

export const getOneUser = async (id: number) => {
  const {data} = await $host.get<IUsers>(`/users/${id}`)
  return data
}

export const postPosts = async (post: IPosts) => {
  const {data} = await $host.post<IPostsResp>('/posts', post)
  return data
}

export const putPost = async (post: IPostsResp) => {
  const {data} = await $host.put<IPostsResp>('/posts', post)
  return data
}

interface IDeleteProp {
  id: string
}

export const deletePost = async ({id}: IDeleteProp) => {
  const {data} = await $host.delete(`/posts/${id}`)
  return data
}
