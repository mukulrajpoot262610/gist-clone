// import { useLoadingWithRefresh } from "@/hooks/useLoadingWithRefresh";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    // const { loading } = useLoadingWithRefresh();

    return <div className="min-h-screen">
        <Navbar />
        <main className="w-11/12 mx-auto min-w-max">
            {children}
        </main>
    </div>

}

export default Layout