import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {
  deletePost,
  getOneUser,
  getUsers,
  postPosts,
  putPost,
} from '../api/users'

export const useGetUsers = () => {
  const query = useQuery(['users'], getUsers, {})
  return query
}

export const useGetOneUser = (id: number) => {
  const query = useQuery(['users', id], () => getOneUser(id), {})
  return query
}

export const usePostPosts = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(postPosts, {
    onSuccess: () => queryClient.invalidateQueries(['users', 4]),
  })
  return mutate
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries(['users']),
  })
  return mutate
}

export const usePutPost = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation(putPost, {
    onSuccess: () => queryClient.invalidateQueries(['users']),
  })
  return mutate
}
