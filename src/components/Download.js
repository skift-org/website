function Download() {
    return <div className="flex flex-col items-center p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-4xl font-extrabold">
                Ready, Set, Go!
            </div>

            <a className="button" href="https://github.com/skiftOS/skift/releases">
                Download the Latest Release*
            </a>
        </div>

        <div className="text-xs pt-8">
            * skiftOS is alpha software, use it at your own risk.
        </div>
    </div>
}

export default Download;
