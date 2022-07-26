import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const testpage = ()=>{
    return <h1>Test is Best!</h1>
}

export default testpage

export const getServerSideProps = withPageAuthRequired();