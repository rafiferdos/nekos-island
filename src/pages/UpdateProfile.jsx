import { useForm } from "react-hook-form"
import { AuthContext } from "../FirebaseProvider/FirebaseProvider"
import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const UpdateProfile = () => {

    const { user, updateUserProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const notify = () => {
        return toast.success("Updated successfully, please refresh!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        // e.preventDefault()
    }
    const onSubmit = (data) => {
        const { new_name, new_photo_url } = data
        updateUserProfile(user, new_name, new_photo_url)
            .then(() => {

                notify()
            })
    }
    const handleUpdate = handleSubmit(onSubmit)

    return (
        <>
            <div className="lg:min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-200px)] flex items-center justify-center lg:my-16 md:my-8 my-5">
                <Helmet>
                    <title>Neko&apos;s Island | Update Profile</title>
                </Helmet>
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 shadow-2xl">
                    <div className="flex flex-col justify-center items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Update <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>Profile!</span></h2>
                        </div>
                    </div>
                    <form noValidate className="space-y-6" data-aos="fade-left" onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name" className="text-sm">New Name</label>
                            <input type="text" placeholder={user.displayName} className="w-full p-3 bg-gray-200 rounded-2xl" {...register("new_name", { required: true })} />
                            {
                                errors.new_name && <span className='text-red-400 text-sm md:text-lg'>This field is cannot be empty</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="photo" className="text-sm">New Photo URL</label>
                            <input type="text" placeholder={user.photoURL} className="w-full p-3 bg-gray-200 rounded-2xl" {...register("new_photo_url", { required: true })} />
                            {
                                errors.new_name && <span className='text-red-400 text-sm md:text-lg'>This field is cannot be empty</span>
                            }
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Email</label>
                            <input type='email' className="w-full p-3 bg-gray-200 rounded-2xl cursor-not-allowed" disabled={true}></input>
                        </div>
                        <button type="submit" onClick={handleUpdate} className="w-full rounded-full p-3 px-5 text-sm font-bold uppercase bg-violet-400 hover:bg-violet-600 text-gray-100 transition-all text-center">Update</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default UpdateProfile