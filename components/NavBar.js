import Link from 'next/link'

export default function NavBar({user}){

    const login_logout = user ? 
        <a href='/api/auth/logout'>Logout</a> : 
        <a href='/api/auth/login'>Login</a>
    
    const characters = user?
        <a href='./users/testpage'>testpage</a>:
        null
    
    return(
        <div className='navbar'>
            <Link href='http://localhost:3000/'><a><h3>Home</h3></a></Link>
            {login_logout}
            {characters}
        </div>
    )
}