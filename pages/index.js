import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'


export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <h1>Loading...</h1>
  if (error) return (<div><h1>An Error Occured</h1><p>{error.message}</p></div>)

  return (
    <>
      <NavBar user={user} />
    </>
  )
}
