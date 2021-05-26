function Hero() {
    return<div className="flex flex-col items-center">
        <div className="flex items-center flex-col md:flex-row max-w-screen-xl">
            <embed className="max-w-xl w-full" src="laptop.png"/>
            <div className="flex flex-col items-start max-w-md p-4">
                <div className="text-4xl font-extrabold mb-4">
                    skiftOS
                </div>

                <div className="mb-4">
                    An hobby operating system built from scratch in modern C++, featuring a reactive UI library, and a strong emphasis on user experience. 
                </div>

                <a className="button" href="https://github.com/skiftOS/skift/releases">
                    Download the Latest Release*
                </a>
                <div className="text-xs pt-8">
                * skiftOS is alpha quality software use it at your own risks
                </div>
            </div>
        </div>
    </div>
}

export default Hero;