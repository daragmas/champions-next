import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Head from 'next/head'
import {useState, useEffect} from 'react'

export default function Characters() {
    const [characterData, setCharacterData] = useState([])

    useEffect(()=>{
        const getCharacterData = async () => {
        const req = await fetch('http://localhost:3000/api/testapi')
        const res = await req.json()
        setCharacterData(res)
    }
    getCharacterData()
    },[]) 

    

    console.log(characterData)
    

    return (
        <>
            <Head>
                <title>Characters</title>
            </Head>
            <NavBar />
            <ul>
                {characterData.characters.map((character)=><li>{character}</li>)}
            </ul>
            <Link href='./createcharacter'><h3>Create a Character</h3></Link>
        </>
    )

}

export const getServerSideProps = withPageAuthRequired();