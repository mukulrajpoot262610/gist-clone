import { forgotPassword } from "@/services/api";
import Head from "next/head";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonLoading(true);

        const payload = {
            email
        }

        try {
            const res = await forgotPassword(payload);
            toast.success(res.data.message);
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message)
        } finally {
            setButtonLoading(false);
        }
    }


    return (
        <>
            <Head>
                <title>Forgot your Password? - Gist Clone</title>
            </Head>
            <div className="flex justify-center items-center flex-col min-h-screen">
                <img src="/navbar/octocat.svg" className="h-16" />
                <h1 className="mt-6 text-2xl font-light">Reset your password</h1>
                <div className="bg-dark border border-border-primary rounded-lg p-6 mt-6 flex flex-col justify-center items-center max-w-lg w-[95%] lg:w-80">
                    <h1 className="mb-5 text-text-white text-sm font-bold">Enter your user account verified email address</h1>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>

                        <button className={`btn btn-sm w-full mt-4 bg-button-primary text-white border-button-primary capitalize hover:bg-button-primary hover:border-button-primary ${buttonLoading && "loading"}`}>Send Password Reset Email</button>
                    </form>
                </div>

                <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
            </div>
        </>
    )
}

export default ForgotPassword