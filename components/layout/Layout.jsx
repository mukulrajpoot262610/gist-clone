import { useLoadingWithRefresh } from "@/hooks/useLoadingWithRefresh";
import Head from "next/head";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    const router = useRouter();
    const path = router.pathname;
    const { loading } = useLoadingWithRefresh();

    return <div className="min-h-screen">
        {loading ? <Loader /> : <>
            <Head>
                <link rel="shortcut icon" href="/navbar/octocat.svg" />
            </Head>
            {(path !== '/login' && path !== '/join' && path !== '/forgot_password' && !path.includes("verifyemail")) && !path.includes("resetpassword") ? <Navbar /> : ""}
            <Toaster />
            <main className="mx-auto min-w-max z-30">
                {children}
            </main>
        </>}
    </div>

}

export default Layout