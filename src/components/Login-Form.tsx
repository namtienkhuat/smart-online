export default function Login({
    handleStatus,
    email,
    handleEmail,
    pass,
    handlePass,
    error,
}: any) {
    return (
        <div className="fixed top-0 h-[100vh] w-[1180px] bg-primary">
            <div className=" mt-[177px] relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">
                            Sign in
                        </h1>
                        <p className="mt-2 text-gray-500">
                            Sign in below to access your account
                        </p>
                    </div>
                    <div className="mt-5">
                        <div>
                            <div className="relative mt-6">
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="text"
                                    placeholder="Email Address"
                                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                />
                                <h3 className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Email Address
                                </h3>
                            </div>
                            <div className="relative mt-6">
                                <input
                                    value={pass}
                                    onChange={handlePass}
                                    type="text"
                                    placeholder="Password"
                                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                />
                                <h3 className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Password
                                </h3>
                            </div>
                            <div
                                className="my-6 hover:opacity-70"
                                onClick={handleStatus}
                            >
                                <button className="w-full rounded-md bg-primary px-3 py-4 text-white ">
                                    Sign in
                                </button>
                            </div>
                            <div className="grid grid-rows-2">
                                <p className="text-center text-sm text-gray-500">
                                    Dont have an account yet?
                                    <a
                                        href="#!"
                                        className="font-semibold text-gray-600"
                                    >
                                        Sign up
                                    </a>
                                    .
                                </p>
                                <p className="text-red-600 font-semibold text-center text-sm">
                                    {error}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
