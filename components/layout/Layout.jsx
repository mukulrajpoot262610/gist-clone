// import { useLoadingWithRefresh } from "@/hooks/useLoadingWithRefresh";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    const router = useRouter();
    const path = router.pathname;
    // const { loading } = useLoadingWithRefresh();

    console.log(path)

    return <div className="min-h-screen">
        <Head>
            <link rel="shortcut icon" href="/navbar/octocat.svg" />
        </Head>
        {(path !== '/login' && path !== '/join' && path !== '/reset_password') ? <Navbar /> : ""}
        <main className="mx-auto min-w-max">
            {children}
        </main>
    </div>

}

export default Layout