function ModernCPP() {
    return <div className="flex flex-col items-center  p-12 bg-cover bg-black" style={{ backgroundImage: "url(features/modern-cpp.png)"}}>
        <div className="flex flex-row items-center gap-4">
            <img src="features/cpp.svg" className="w-16" alt=""/>
            <div className="text-xl font-extrabold">
                Written in modern C++
            </div>
        </div>
    </div>
}

function LibWidget() {
    return <div className="flex flex-col items-center pt-12 pb-12 bg-gray-50 text-black min-h-25">
        <div className="title">
            Reactive UI library
        </div>
        <img src="features/libwidget.png" className="h-32" alt=""/>
    </div>
}

function Unix() {
    return <div className="flex flex-col items-center p-12 bg-black min-h-25">
        <div className="title">
            *NIX
        </div>
        skiftOS feature an UNIX-like terminal experience with many familiar UNIX utilities
        <img src="features/unix.png" alt=""/>
    </div>
}

function App(props) {
    return <div className="flex flex-col items-center capitalize w-16 md:w-32">
        <img src={"apps/" + props.name + ".png"} alt=""/>
        {props.name.replace('-', ' ')}
    </div>
}

function Applications() {
    return <div className="bg-white text-black p-4 md:p-12">
        <div className="flex flex-col items-center max-w-screen-xl m-auto">
            <div className="title">
                Many Applications
            </div>
            <div className="flex justify-center flex-wrap gap-12">
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
        <Applications />
        <ModernCPP />
        <LibWidget />
        <Unix />
    </div>
}

export default Features;