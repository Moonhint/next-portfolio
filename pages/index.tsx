import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <Head>
                <title>The Home Page</title>
            </Head>
            <div>
                <h1>My Home Page</h1>
                <div>
                    <h3>Repository</h3>
                    <ul>
                        <li>
                            <Link href="/blog" >Blog</Link>
                        </li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Home;
