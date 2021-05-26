function Hero() {
    return<div className="flex flex-col items-center">
        <div className="flex items-center flex-col lg:flex-row max-w-screen-xl m-auto p-4">
            <embed className="max-w-xl w-full" src="laptop.png"/>
            <div className="flex flex-col items-start max-w-md">
                <div className="text-4xl font-extrabold mb-4">
                    skiftOS
                </div>

                <div className="mb-4">
                    An hobby operating system built from scratch in modern C++, featuring a reactive UI library, and a strong emphasis on user experience. 
                </div>

                <a className="button" href="https://github.com/skiftOS/skift/releases">
                    Download the Latest Release
                </a>
            </div>
        </div>
    </div>
}

export default Hero;