import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavBar from "../../components/NavBar";
import Head from 'next/head'

export default function CreateCharacter() {

    return (
        <>
            <Head>
                <title>Create A Character</title>
            </Head>
            <NavBar />
            <h1>Character creation!</h1>
        </>
    )

}

export const getServerSideProps = withPageAuthRequired();