import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

export default function NavBar() {
    const { user, error, isLoading } = useUser();

    console.log(user)
    
    const login_logout = user ?
        <a href='/api/auth/logout'> Logout </a> :
        <a href='/api/auth/login'> Login </a>

    const characters = user ?
        <a href='http://localhost:3000/users/characters'> Characters </a> :
        null

    return (
        <div className='navbar'>
            <Link href='http://localhost:3000/'><h3> Home </h3></Link>
            {characters}
            {login_logout}
        </div>
    )
}