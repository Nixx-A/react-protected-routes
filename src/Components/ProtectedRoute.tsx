/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Navigate, Outlet } from 'react-router-dom'

interface PropsProtectedRoute {
  children?: JSX.Element
  isAllowed: boolean
  redirectTo?: string | undefined
}

export default function ProtectedRoute ({ children, isAllowed, redirectTo = '/' }: PropsProtectedRoute): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (children != null) ? children : <Outlet />
}
