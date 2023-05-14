import { verifyEmail } from "@/services/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const VerifyEmail = () => {

    const router = useRouter();
    const { code } = router.query;
    const [data, setData] = useState({});

    console.log(code)

    useEffect(() => {
        const fetchVerifyEmail = async () => {
            try {
                const { data } = await verifyEmail(code);
                setData(data)
            } catch (err) {
                console.log(err);
                setData(err.response.data)
            }
        }

        fetchVerifyEmail()
    }, [code])

    return (
        <>
            <Head>
                <title>Verify Email - Gist Clone</title>
            </Head>
            <div className="flex justify-center items-center flex-col min-h-screen py-20">
                <img src="/navbar/octocat.svg" className="h-16" />
                <h1 className="mt-6 text-2xl font-light">Verify Email</h1>
                <div className="bg-dark border border-border-primary rounded-lg p-6 mt-6 flex flex-col justify-center items-center max-w-lg w-[95%] lg:w-80 text-center">
                    {data.message}
                </div>

                <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
            </div>
        </>
    )
}

export default VerifyEmail