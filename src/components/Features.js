function ModernCPP() {
    return <div className="flex items-center p-12 bg-cover bg-black min-h-25" style={{ backgroundImage: "url(features/modern-cpp.png)"}}>
        <div className="text-2xl font-extrabold">
        Written in modern C++
        </div>
    </div>
}

function LibWidget() {
    return <div className="flex flex-col items-center pt-12 pb-12 bg-gray-50 text-black min-h-25">
        <div className="text-2xl font-extrabold">
            Reactive UI library
        </div>
        <img src="features/libwidget.png" className="h-64" alt=""/>
    </div>
}

function Unix() {
    return <div className="flex flex-col items-center p-12 bg-black min-h-25">
        <div className="text-2xl font-extrabold">
            UNIX-like terminal experience with many familiar UNIX utilities
        </div>
        <img src="features/unix.png" alt=""/>
    </div>
}

function App(props) {
    return <div className="flex flex-col items-center capitalize w-32">
        <img src={"apps/" + props.name + ".png"} alt=""/>
        {props.name.replace('-', ' ')}
    </div>
}

function Applications() {
    return <div className="bg-white text-black p-16">
        <div className="flex flex-col items-center max-w-screen-xl m-auto">
            <div className="text-2xl font-extrabold mb-8">
                Many Applications
            </div>
            <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap gap-12">
                <App name="archive-manager"/>
                <App name="calculator"/>
                <App name="file-manager"/>
                <App name="font-manager"/>
                <App name="image-viewer"/>
                <App name="media-player"/>
                <App name="paint"/>
                <App name="settings"/>
                <App name="snake"/>
                <App name="task-manager"/>
                <App name="terminal"/>
                <App name="text-editor"/>
            </div>
        </div>
    </div>
}

function Features(props) {
    return <div className="flex flex-col">
        <div className="text-4xl font-extrabold m-8 text-center">
            Features
        </div>
        <Applications />
        <ModernCPP />
        <LibWidget />
        <Unix />
    </div>
}

export default Features;