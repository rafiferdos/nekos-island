const UpdateProfile = () => {
    return (
        <>
            <div className="lg:min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-200px)] flex items-center justify-center lg:my-16 md:my-8 my-5">
                <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 shadow-2xl">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Update <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>Profile!</span></h2>
                        </div>
                    </div>
                    <form noValidate className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm">New Name</label>
                            <input type="text" placeholder="" className="w-full p-3 bg-gray-200 rounded-2xl" />
                        </div>
                        <div>
                            <label htmlFor="photo" className="text-sm">New Photo URL</label>
                            <input type="text" className="w-full p-3 bg-gray-200 rounded-2xl" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Email</label>
                            <input type='email' className="w-full p-3 bg-gray-200 rounded-2xl cursor-not-allowed" disabled={true}></input>
                        </div>
                        <button type="submit" className="w-full rounded-full p-3 px-5 text-sm font-bold uppercase bg-violet-400 hover:bg-violet-600 text-gray-100 transition-all text-center">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UpdateProfile