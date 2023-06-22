/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout, { Admin, Analytics, Dashboard, Home, Landing, Login } from './pages/PageLayout'
import Header from './Components/Header'
import { useState } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
import { type User } from '../Types'

function App (): JSX.Element {
  const [user, setuser] = useState<User | null>(null)

  const login = (): void => {
    // request  done
    setuser({
      id: 1,
      name: 'John',
      permissions: ['analize'],
      roles: ['no']
    })
  }

  const logout = (): void => { setuser(null) }

  return (
    <div className='bg-black h-screen w-screen text-white'>
      <BrowserRouter>
        <Header />

        {
          user
            ? <button className='bg-purple-600 hover:bg-purple-500 px-1 py-0.5 rounded-sm' onClick={logout}>Logout</button>
            : <button className='bg-purple-600 hover:bg-purple-500 my-3 px-1 py-0.5 rounded-sm' onClick={login}>Login</button>
        }

        <Routes>
          <Route path='/' element={<PageLayout />} />
          <Route path='/landing' element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route path='/analytics' element={
            <ProtectedRoute isAllowed={!!user && user.permissions.includes('analize')} redirectTo='/home'>
              <Analytics />
            </ProtectedRoute>
          } />

          <Route path='/admin' element={
            <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} redirectTo='/login'>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path='login' element={<Login/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
