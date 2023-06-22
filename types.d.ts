export interface User {
  id: number
  name: string
  permissions: string[]
  roles: sring[]
}

interface UserProps {
  user: User
}
