import { Link } from 'react-router-dom'

export default function Header (): JSX.Element {
  return (
    <ul className="text-white flex gap-4">
      <Link className='hover:text-purple-800 duration-200 cursor-pointer' to={'/landing'}>Landing</Link>
      <Link className='hover:text-purple-800 duration-200 cursor-pointer' to={'/home'}>Home</Link>
      <Link className='hover:text-purple-800 duration-200 cursor-pointer' to={'/dashboard'}>Dashboard</Link>
      <Link className='hover:text-purple-800 duration-200 cursor-pointer' to={'/analytics'}>Analytics</Link>
      <Link className='hover:text-purple-800 duration-200 cursor-pointer' to={'/admin'}>Admin</Link>
    </ul>
  )
}
