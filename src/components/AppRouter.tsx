import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import User from './User'
import UserList from './UserList'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/users/:id" element={<User />} />
      <Route path="*" element={<UserList />} />
    </Routes>
  )
}

export default AppRouter
