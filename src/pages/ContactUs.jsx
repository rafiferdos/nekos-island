import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const notify = () => toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 shadow-2xl">
                <div className="flex flex-col justify-center items-center">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&rsquo;s <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>talk!</span></h2>
                        <div className="text-gray-400 dark:text-gray-600">Ready to go?</div>
                    </div>
                    {/*<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />*/}
                </div>
                <form noValidate className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 bg-gray-200 rounded-2xl" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 bg-gray-200 rounded-2xl" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 bg-gray-200 rounded-2xl"></textarea>
                    </div>
                    <button onClick={notify} type="submit" className="w-full rounded-full p-3 px-5 text-sm font-bold uppercase bg-violet-400 hover:bg-violet-600 text-gray-100 transition-all text-center">Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactUs