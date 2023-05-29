
function Title({ children }) {
  return <h1 className="text-4xl font-extrabold mb-4">
    {children}
  </h1>
}

function Link({ children, ...props }) {
  return <a className="text-blue-500 hover:underline" {...props}>
    {children}
  </a>
}

function TwoColumns({ children }) {
  return <section className="flex flex-col xl:grid xl:grid-cols-2 max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8">
    {children}
  </section>
}

function Section({ children }) {
  return <section className="max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8">
    {children}
  </section>
}

function Separator() {
  return <div className="h-px bg-gray-800 w-full"></div>
}

/* --- Sections ------------------------------------------------------------- */

function NavBar() {
  return <section className="top-0 px-8 py-6 bg-zinc-950 bg-opacity-70 border-b border-white border-opacity-10 backdrop-filter backdrop-blur">
    <div className="flex gap-4 items-center max-w-screen-xl m-auto">
      <img className="max-h-6" src="logo.svg" alt="" />
    </div>
  </section>
}

function Hero() {
  return <TwoColumns>
    <img class="p-8" src="laptop.png" alt="" />
    <div>
      <Title>Skift</Title>

      <p>
        skiftOS is a hobby OS built from scratch using C/C++ for ARM, x86, and RISC-V. It's simple, modern and modular. It has a modern C++ core library, reactive UI, and a capability-based microkernel for security and modularity.
      </p>

      <span className="flex gap-4 py-4">
        <a className="button" href="https://github.com/skift-org/skift">
          Contribute on GitHub
        </a>

        <a className="button-secondary" href="https://github.com/skift-org/skift">
          Download the Latest Release*
        </a>
      </span>
      <span className="text-xs">
        * skiftOS is alpha software, use it at your own risk.
      </span>
    </div>
  </TwoColumns>
}

function Goals() {
  return <TwoColumns>
    <div>
      <Title>Goal</Title>

      <div className="text-gray-400 mb-4">
        Written by <img className="inline-block h-6 rounded-full" src="me.jpg" alt="" /> sleepy-monax
      </div>

      <p className="mb-4">
        <b>skiftOS</b> is a project that I have been developing as a hobby, in parallel with my internship/course hours, for almost 3 years in modern C++.
      </p>

      <p className="mt-4">
        The goal is not to create the new Windows, but to have fun with programming,  sharpen my skills, learn the inner working of an OS, and create a system that I like!
      </p>
    </div>

    <img className="rounded" src="capture2.png" alt="" />
  </TwoColumns>
}



function App(props) {
  return <div className="flex flex-col items-center text-center capitalize w-16 gap-2">
    <img src={"apps/" + props.name + ".png"} alt="" />
    {props.name.replace('-', ' ')}
  </div>
}

function Applications() {
  return <TwoColumns>
    <div>
      <Title>
        Wide Range of Apps
      </Title>

      <p>
        From productivity tools to entertainment apps, skiftOS has something for everyone. Whether you're a developer or an everyday user, skiftOS applications are crafted to enhance your experience and provide seamless functionality.
      </p>
    </div>
    <div className="flex justify-center flex-wrap gap-8 py-4">
      <App name="archive-manager" />
      <App name="calculator" />
      <App name="file-manager" />
      <App name="font-manager" />
      <App name="image-viewer" />
      <App name="media-player" />
      <App name="paint" />
      <App name="settings" />
      <App name="snake" />
      <App name="task-manager" />
      <App name="terminal" />
      <App name="text-editor" />
    </div>
  </TwoColumns>
}

function Technologies() {
  return <Section>
    <Title>
      Technologies
    </Title>

    <div className="flex flex-col md:grid md:grid-cols-3 items-top gap-8 pt-4">
      <div className="flex flex-col items-start gap-4">
        <img src="techs/tech-karm.png" className="h-16" alt="" />

        <div className="text-lg font-bold">
          Modern Core Framework
        </div>

        <p>
          A modern C++ core framework that make C++ delightful to use and provides a solid foundation for building applications and libraries.
        </p>

        <Link href="https://github.com/skift-org/skift/tree/main/src/libs">Source Code</Link>
      </div>


      <div className="flex flex-col items-start gap-4">
        <img src="techs/tech-hjert.png" className="h-16" alt="" />
        <div className="text-lg font-bold">
          Capability-based Microkernel
        </div>
        <p>
          A capability-based microkernel that provides security and modularity.
        </p>
        <Link href="https://github.com/skift-org/skift/tree/main/src/kernel">Source Code</Link>
      </div>

      <div className="flex flex-col items-start gap-4">
        <img src="techs/tech-opstart.png" className="h-16" alt="" />
        <div className="text-lg font-bold">
          UEFI Bootloader
        </div>
        <p>
          An UEFI bootloader that support a wide range of customizations with a beautiful graphical interface.
        </p>
        <Link href="https://github.com/skift-org/skift/tree/main/src/kernel/loader">Source Code</Link>
      </div>
    </div>

  </Section >
}


function SocialItem(props) {
  return <a className="flex items-center hover:bg-blue-600 px-4 py-2 rounded" href={props.href}>
    <img className="w-8 mr-2" src={props.image} alt="" />
    <div className="font-bold">{props.name}</div>
  </a>
}

function Social() {
  return <div className="bg-gray-900 p-16">
    <div className="flex flex-col items-center">
      <div className="title">
        Join the Community!
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <SocialItem image="github.svg" name="GitHub" href="https://github.com/skiftOS" />
        <SocialItem image="discord.svg" name="Discord" href="http://discord.skiftos.org/" />
        <SocialItem image="reddit.svg" name="Reddit" href="https://www.reddit.com/r/skift" />
        <SocialItem image="twitter.svg" name="Twitter" href="https://twitter.com/search?q=%23skiftOS" />
      </div>
    </div>
  </div>
}

function Footer() {
  return <div className="text-center p-8 flex flex-col items-center gap-4">
    <img className="w-10" src="skift.svg" alt="" />
    "The delightful operating system"<br />
    Copyright © 2018-2023 Cute Engineering<br />
    All rights reserved.<br />
    <a href="https://github.com/skiftOS/website"> Source code</a>
    <img className="w-10" src="glider.svg" alt="" />
  </div>
}

function Page() {
  return (
    <div>
      <div className="bg-cover bg-center" style={{ backgroundImage: "url(wallpaper.png)" }}>
        <NavBar />
        <Hero />
      </div>
      <Separator />
      <Goals />
      <Separator />
      <Applications />
      <Separator />
      <Technologies />
      <Separator />
      <Social />
      <Separator />
      <Footer />
    </div>
  );
}

export default Page;