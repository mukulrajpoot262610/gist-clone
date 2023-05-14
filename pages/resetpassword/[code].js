import { resetPassword } from "@/services/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ResetPassword = () => {

    const router = useRouter();

    const { code } = router.query;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonLoading(true);

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            setButtonLoading(false);
            return;
        }

        const payload = {
            password,
            "passwordConfirm": password
        }

        try {
            const res = await resetPassword(payload, code);
            toast.success(res.data.message);
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
                <title>Reset your Password - Gist Clone</title>
            </Head>
            <div className="flex justify-center items-center flex-col min-h-screen">
                <img src="/navbar/octocat.svg" className="h-16" />
                <h1 className="mt-6 text-2xl font-light">Reset your password</h1>
                <div className="bg-dark border border-border-primary rounded-lg p-6 mt-6 flex flex-col justify-center items-center max-w-lg w-[95%] lg:w-80">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Confirm Password</span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
                        </div>

                        <button className={`btn btn-sm w-full mt-4 bg-button-primary text-white border-button-primary capitalize hover:bg-button-primary hover:border-button-primary ${buttonLoading && "loading"}`}>Reset Password</button>
                    </form>
                </div>

                <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
            </div>
        </>
    )
}

export default ResetPassword