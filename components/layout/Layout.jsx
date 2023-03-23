// import { useLoadingWithRefresh } from "@/hooks/useLoadingWithRefresh";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    const router = useRouter();
    const path = router.pathname;
    // const { loading } = useLoadingWithRefresh();

    console.log(path)

    return <div className="min-h-screen">
        {(path !== '/login' && path !== '/join') ? <Navbar /> : ""}
        <main className="w-11/12 mx-auto min-w-max">
            {children}
        </main>
    </div>

}

export default Layout