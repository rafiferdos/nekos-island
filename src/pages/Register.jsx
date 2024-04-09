import {Link} from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="hero min-h-screen lg:w-3/6 md:w-4/6 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="font-bold text-2xl lg:text-6xl md:text-4xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi">Register now!</h1>
                        <p className="py-6 opacity-60">We can&apos;t wait for you to get into here and to avoid unnecessary reload data loss please do some quick fill-up, so why wait? Let&apos;s dig in.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered input-primary" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered input-primary"
                                       required/>
                                <div className="flex justify-between items-center">
                                    <p className='opacity-60'>Already have an account?</p>
                                    <Link className='btn btn-ghost hover:bg-white underline text-purple-500' to='/login'>Login</Link>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-outline">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register