import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css"

export default function Custom404() {
    return <Layout>
        <Head>
            <title>404!</title>
        </Head>
        <div>
            <h1 className={utilStyles.headingLg}>Whoops! Seems like this page doesn't exist</h1>
            <h1 className={utilStyles.headingMd}>404 or something like that</h1>
        </div>
        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
            } 
        `}
        </style>
    </Layout>
}