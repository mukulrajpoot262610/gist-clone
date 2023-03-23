
const Login = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <img src="/navbar/octocat.svg" className="h-16" />
            <div className="bg-dark border border-border rounded-lg p-6 mt-10 flex flex-col justify-center items-center w-1/4">
                <img src="/navbar/octocat.svg" className="h-8" />
                <h1 className="my-5 text-text-white">Sign in to <span className="font-bold">GitHub Gist</span></h1>
                <hr className="w-full border-border mb-5" />
                <form className="w-full">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-text-white font-light">Username or email address</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs bg-light input-sm" />
                    </div>
                    <div className="form-control w-full max-w-xs mt-3">
                        <label className="label">
                            <span className="label-text text-text-white font-light">Password</span>
                            <span className="label-text text-text-blue text-xs cursor-pointer hover:underline">Forgot Password?</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs bg-light input-sm" />
                    </div>
                    <button className="btn btn-sm w-full mt-4 bg-button-primary text-white border-button-primary capitalize hover:bg-button-primary hover:border-button-primary">Sign in</button>
                </form>
            </div>

            <div className="border-border border rounded-lg w-1/4 p-4 mt-6 text-center">
                <h1 className="text-sm">New to GitHub? <span className="text-text-blue cursor-pointer hover:underline">Create an account.</span></h1>
            </div>

            <h2 className="text-xs mt-16 hover:text-text-blue cursor-pointer hover:underline">Contact GitHub</h2>
        </div>
    )
}

export default Login