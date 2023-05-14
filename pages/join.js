import { checkUsername, register } from "@/services/api";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { HiCheckCircle } from 'react-icons/hi';
import { TiWarning } from 'react-icons/ti';

const Join = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(async () => {
            if (username.length > 0) {
                try {
                    const res = await checkUsername(username)
                    setUsernameAvailable(res.data.message === "Username is available");
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            }
        }, 800)
        return () => clearTimeout(timer)
    }, [username])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonLoading(true);

        const payload = {
            email,
            firstName,
            lastName,
            password,
            "passwordConfirm": password,
            username,
        }

        try {
            const res = await register(payload);
            toast.success(res.data.message)
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
                <title>Join GitHub - Gist Clone</title>
            </Head>
            <div className="flex justify-center items-center flex-col min-h-screen py-20">
                <img src="/navbar/octocat.svg" className="h-16" />
                <h1 className="mt-6 text-2xl font-light">Join GitHub</h1>
                <div className="bg-dark border border-border-primary rounded-lg p-6 mt-6 flex flex-col justify-center items-center max-w-lg w-[95%] lg:w-80">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Username <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setUsername(e.target.value)} value={username} required />
                            {
                                username.length > 0 && (isLoading ? <label className="label">
                                    <span className="label-text-alt text-yellow-500 font-bold flex justify-center items-center gap-1"><TiWarning /> Checking Availability...</span>
                                </label> : !usernameAvailable ? <label className="label">
                                    <span className="label-text-alt text-red-500 font-bold flex justify-center items-center gap-1"><TiWarning /> {username} is not available</span>
                                </label> : <label className="label">
                                    <span className="label-text-alt text-green-500 font-bold flex items-center justify-center gap-1"><HiCheckCircle /> {username} is available</span>
                                </label>)
                            }

                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text text-text-white font-light">FirstName<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text text-text-white font-light">LastName<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Email Address <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label className="label">
                                <span className="label-text text-text-white font-light">Password <span className="text-red-500">*</span></span>
                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs bg-light input-sm" onChange={(e) => setPassword(e.target.value)} value={password} required />
                            <label className="label">
                                <span className="label-text-alt text-text-white font-light text-xs">Make sure it&apos;s at least 15 characters OR at least 8 characters including a number and a lowercase letter.</span>
                            </label>
                        </div>
                        <button type="submit" className={`btn btn-sm w-full mt-4 bg-button-primary text-white border-button-primary capitalize hover:bg-button-primary hover:border-button-primary ${buttonLoading && "loading"}`}>Create Account</button>
                    </form>
                </div>

                <div className="border-border-primary border rounded-lg max-w-lg w-[95%] lg:w-80 p-4 mt-6 text-center">
                    <h1 className="text-sm">Already have an Account?
                        <Link href="/login">
                            <span className="text-text-blue cursor-pointer hover:underline"> Sign in.</span>
                        </Link>
                    </h1>
                </div>

                <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
            </div>
        </>
    )
}

export default Join