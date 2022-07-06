import Head from "next/head"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Results from "../components/Results"
import { API_KEY, CONTEXT_KEY } from "../keys"
import Response from "../response"
import { useRouter } from "next/router"

function search({ results }) {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Search Results</title>
            </Head>
            <Header />
            <Menu />
            <Results data={results} />
        </div>
    );
}

export default search;

export async function getServerSideProps(context) {
    const useDummyData = true;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());
    return {
        props: {
            results: data,
        }
    }
}