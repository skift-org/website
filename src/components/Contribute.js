function Contribute() {
    return <div className="flex flex-col items-center bg-blue-600">
            <a href="https://github.com/skiftOS/skift" className="flex items-center gap-4 p-4 md:p-12">
                <img src="github.svg" className="h-16" alt=""/>
                <div className="flex flex-col">
                    <div className="text-2xl font-extrabold mb-2">
                        Join the effort!
                    </div>
                    <div>
                    The skift operating system is open source.
                    </div>
                    <div>
                        We welcome contributions.
                    </div>
                </div>
            </a>

    </div>
}

export default Contribute