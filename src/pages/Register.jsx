import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const validateText = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]{6,}$/

    return (
        <>
            <div className="hero min-h-screen lg:w-3/6 md:w-4/6 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="font-bold text-2xl lg:text-6xl md:text-4xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi">Register
                            now!</h1>
                        <p className="py-6 opacity-60">We can&apos;t wait for you to get into here and to avoid
                            unnecessary reload data loss please do some quick fill-up, so why wait? Let&apos;s dig
                            in.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body" noValidate>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text" placeholder="Your Name"
                                    className="input input-bordered input-primary"
                                    {...register("name", { required: true })} />
                                {errors.name &&
                                    <span className='text-red-400 text-sm md:text-lg'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email" placeholder="Email"
                                    className="input input-bordered input-primary"
                                    {...register("email", { required: true })} />
                                {errors.email &&
                                    <span className='text-red-400 text-sm md:text-lg'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your Photo URL"
                                    className="input input-bordered input-primary"
                                    {...register("photo_url", { required: true })} />
                                {errors.photo_url &&
                                    <span className='text-red-400 text-sm md:text-lg'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    className="input input-bordered input-primary"
                                    {...register("password", {
                                        required: true, pattern:
                                        {
                                            value: validateText,
                                            message: "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
                                        }
                                    })} />
                                {
                                    errors.password &&
                                    <span className='text-red-400 text-sm md:text-lg'>
                                        Required and the format should be:
                                        <ul className='list-disc text-sm ml-5'>
                                            <li>must have at least one uppercase letter</li>
                                            <li>one lowercase letter</li>
                                            <li>at least 6 characters long</li>
                                        </ul>
                                    </span>
                                }
                                <div className="flex justify-between items-center">
                                    <p className='opacity-60 lg:text-lg text-sm'>Already have an account?</p>
                                    <Link className='btn btn-ghost hover:bg-white underline text-purple-500'
                                        to='/login'>Login</Link>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary btn-outline">Register</button>
                            </div>
                        </form>
                        <DevTool control={control} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register