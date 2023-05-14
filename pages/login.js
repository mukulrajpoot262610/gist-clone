import { setAuth } from "@/global/authSlice";
import { getUserData, login } from "@/services/api";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch();
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonLoading(true);

        const payload = {
            email,
            password,
        }

        try {
            const res = await login(payload);
            toast.success("Login Successful");
            const { data } = await getUserData();
            dispatch(setAuth(data));
            router.replace("/create");
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message)
        } finally {
            setButtonLoading(false);
        }
    }


    return (
        <>
            <Head>
                <title>Sign in to GitHub - Gist Clone</title>
            </Head>
            <div className="flex justify-center items-center flex-col min-h-screen">
                <img src="/navbar/octocat.svg" className="h-16" />
                <h1 className="mt-6 text-2xl font-light">Sign in to GitHub</h1>
                <div className="bg-dark border border-border-primary rounded-lg p-6 mt-6 flex flex-col justify-center items-center max-w-lg w-[95%] lg:w-80">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Email address</span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Password</span>
                                <Link href="/reset_password">
                                    <span className="label-text text-text-blue text-xs cursor-pointer hover:underline">Forgot Password?</span>
                                </Link>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </div>
                        <button className={`btn btn-sm w-full mt-4 bg-button-primary text-white border-button-primary capitalize hover:bg-button-primary hover:border-button-primary ${buttonLoading && "loading"}`}>Sign in</button>
                    </form>
                </div>

                <div className="border-border-primary border rounded-lg max-w-lg w-[95%] lg:w-80 p-4 mt-6 text-center">
                    <h1 className="text-sm">New to GitHub?
                        <Link href="/join">
                            <span className="text-text-blue cursor-pointer hover:underline"> Create an account.</span>
                        </Link>
                    </h1>
                </div>

                <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
            </div>
        </>
    )
}

export default Login