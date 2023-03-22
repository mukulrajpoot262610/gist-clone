import { useLoadingWithRefresh } from "@/hooks/useLoadingWithRefresh";
import Loader from "./Loader";

const Layout = ({ children }) => {

    const { loading } = useLoadingWithRefresh();

    return loading ? (
        <Loader />
    ) : (
        <>
            <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
                {children}
            </main>
        </>
    )
}

export default Layout