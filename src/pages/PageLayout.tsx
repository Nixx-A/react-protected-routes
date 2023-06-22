export default function PageLayout (): JSX.Element {
  return (
    <>
      <div className='text-center pt-5 text-purple-600'>Home</div>
      <p className='text-white'>public</p>
    </>
  )
}

export const Landing = (): JSX.Element => {
  return (
    <>
      <p>Landin page (public)</p>
    </>
  )
}

export const Home = (): JSX.Element => {
  return (
    <h2>Home page (private)</h2>
  )
}

export const Dashboard = (): JSX.Element => {
  return (
    <p>Dashboard page (private)</p>
  )
}

export const Analytics = (): JSX.Element => {
  return (
    <p>Analytics (private, permission: analize)</p>
  )
}

export const Admin = (): JSX.Element => {
  return (
    <p>Admin (private, permission: admin)</p>
  )
}

export const Login = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-white text-2xl text-center">Login here </h1>
      <form className="flex justify-center gap-4 mt-8">
        <input placeholder="mock..." type="text" />
        <input placeholder="mock..." type="text" />
      </form>
    </div>
  )
}
