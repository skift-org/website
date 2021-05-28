function Goals() {
    return <div className="bg-white text-black flex flex-col items-center px-4 py-4 md:py-16">
        <div className="flex items-center flex-col md:flex-row gap-8">
            <div className="md:hidden flex flex-col items-center max-w-md">
                <img className="rounded" src="capture2.png" alt=""/>
            </div>

            <div className="max-w-md">
                <div className="text-4xl font-extrabold mb-2">
                    Goals
                </div>

                <div className="text-gray-400 mb-4">
                    Written by <img className="inline-block h-6 rounded-full" src="me.jpg" alt=""/> sleepy-monax
                </div>

                <p className="mb-4">
                    <b>skiftOS</b> is a project that I have been developing as a hobby, in parallel with my internship/course hours, for almost 3 years in modern C++.
                </p>

                <p className="mt-4">
                    The goal is not to create the new Windows, but to have fun with programming,  sharpen my skills, learn the inner working of an OS, and create a system that I like!
                </p>
            </div>

            <div className="hidden md:flex flex-col items-center max-w-md">
                <img className="rounded" src="capture2.png" alt=""/>
            </div>
        </div>
    </div>
}

export default Goals