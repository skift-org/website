
function Title({ children }) {
  return <h1 className="text-4xl font-extrabold mb-4">
    {children}
  </h1>
}

function Subtitle({ children }) {
  return <h2 className="text-2xl font-bold mb-4">
    {children}
  </h2>
}

function Link({ children, ...props }) {
  return <a className="text-blue-500 hover:underline" {...props}>
    {children}
  </a>
}

function TwoColumnsSection({ id, children, className }) {
  return <section id={id} className={"flex flex-col xl:grid xl:grid-cols-2 max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8 " + className}>
    {children}
  </section>
}

function TwoColumns({ children, className }) {
  return <section className={"flex flex-col xl:grid xl:grid-cols-2 gap-12 xl:gap-8 pt-8 " + className}>
    {children}
  </section>
}

function Section({ id, children, className }) {
  return <section id={id} className={"max-w-screen-xl px-4 py-8 md:p-24 m-auto gap-12 xl:gap-8 " + className}>
    {children}
  </section>
}

function Separator() {
  return <div className="h-px bg-gray-800 w-full"></div>
}

/* --- Sections ------------------------------------------------------------- */

function NavBar() {
  return <nav className="sticky top-0 px-8 py-6 bg-gray-950 bg-opacity-70 border-b border-white border-opacity-10 backdrop-filter backdrop-blur">
    <div className="flex gap-4 items-center max-w-screen-xl m-auto">
      <img className="max-h-6" src="static/logo.svg" alt="" />
      <div className="flex-grow"></div>
      <Link href="#goal">Goal</Link>
      <Link href="#features">Features</Link>
      <Link href="#technologies">Technologies</Link>
      <Link href="#community">Community</Link>
    </div>
  </nav>
}

function Hero() {
  return <TwoColumnsSection>
    <img class="p-8" src="static/laptop.png" alt="" />
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
  </TwoColumnsSection>
}

function Goals() {
  return <TwoColumnsSection id="goal">
    <div>
      <Title>Goal</Title>

      <div className="text-gray-400 mb-4">
        Written by <Link href="https://github.com/sleepy-monax"><img className="inline-block h-6 rounded-full me-1" src="static/me.jpg" alt="" />sleepy-monax</Link>
      </div>

      <p className="mb-4">
        <b>skiftOS</b> is a project that I have been developing as a hobby, in parallel with my internship/course hours, for almost 3 years in modern C++.
      </p>

      <p className="mt-4">
        The goal is not to create the new Windows, but to have fun with programming, sharpen my skills, learn the inner working of an OS, and create a system that I like!
      </p>
    </div>

    <img className="rounded" src="static/capture2.png" alt="" />
  </TwoColumnsSection>
}



function App(props) {
  return <div className="flex flex-col items-center text-center capitalize w-16 gap-2">
    <img src={"static/apps/" + props.name + ".png"} alt="" />
    {props.name.replace('-', ' ')}
  </div>
}

function Beautiful() {
  return <TwoColumns>
    <div>
      <Subtitle>
        Beautiful
      </Subtitle>

      <p>
        skiftOS has a beautiful and modern user interface. It's designed to be simple, intuitive, and easy to use.
      </p>
    </div>
    <img className="rounded" src="static/capture.png" alt="" />
  </TwoColumns>
}

function Applications() {
  return <TwoColumns>
    <div>
      <Subtitle>
        Wide Range of Apps
      </Subtitle>

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

function RejectPosix() {
  return <TwoColumns>
    <div>
      <Subtitle>
        It's not a *NIX!
      </Subtitle>

      <p>
        skiftOS is not a *NIX. It's a new system with a new API. It's not a Linux distribution, and it's not a Unix-like system. It's a new system inspired by 9front, Haiku, and Fuchsia.
      </p>
    </div>
    <div className="flex flex-col items-center gap-4">
      <img className="h-56" src="static/nolinux.png" alt="" />
    </div>
  </TwoColumns>
}



function Features() {
  return <Section id="features">
    <Title>Features</Title>
    <p>
      While skiftOS is still in early development, it already has a wide range of features that make it a great choice for anyone looking for a modern, secure, and easy-to-use operating system.
    </p>
    <Beautiful />
    <Applications />
    <RejectPosix />
  </Section>
}

function Tech({ icon, title, desc, link }) {
  return <div className="flex flex-col items-start gap-4">
    <img src={icon} className="max-h-16" alt="" />
    <div className="text-lg font-bold">{title}</div>
    <p>{desc}</p>
    <Link href={link}>Source Code</Link>
  </div>
}

function Technologies() {
  return <Section id="technologies">
    <Title>Technologies</Title>
    <div className="flex flex-col md:grid md:grid-cols-3 items-top gap-8 pt-4">
      <Tech
        icon="static/techs/tech-karm.png"
        title="Modern Core Framework"
        desc="A modern C++ core framework that make C++ delightful to use and provides a solid foundation for building applications and libraries."
        link="https://github.com/skift-org/skift/tree/main/src/libs" />

      <Tech
        icon="static/techs/tech-hjert.png"
        title="Capability-based Microkernel"
        desc="A capability-based microkernel that provides security and modularity."
        link="https://github.com/skift-org/skift/tree/main/src/kernel" />

      <Tech
        icon="static/techs/tech-opstart.png"
        title="UEFI Bootloader"
        desc="An UEFI bootloader that support a wide range of customizations with a beautiful graphical interface."
        link="https://github.com/skift-org/skift/tree/main/src/kernel/opstart" />

      <Tech
        icon="static/techs/tech-hideo.png"
        title="Graphical Shell"
        desc="A responsive and beautiful graphical shell, supporting desktop and mobile devices."
        link="https://github.com/skift-org/skift/tree/main/src/apps" />

      <Tech
        icon="static/techs/tech-cutekit.png"
        title="Multitarget Build System"
        desc="A multitarget build system that support building for ARM, x86, and RISC-V."
        link="https://github.com/cute-engineering/cutekit" />

      <Tech
        icon="static/techs/tech-vaev.png"
        title="Browser Engine"
        desc="A lightning-fast, lightweight, and secure HTML/CSS engine for."
        link="https://github.com/skift-org/skift/tree/main/src/web" />
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
  return <Section id="community" className="bg-gray-900 p-16">
    <div className="flex flex-col items-center">
      <Title>
        Join the Community!
      </Title>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-8 mt-8">
        <SocialItem image="static/github.svg" name="GitHub" href="https://github.com/skift-org" />
        <SocialItem image="static/discord.svg" name="Discord" href="http://discord.skiftos.org/" />
        <SocialItem image="static/reddit.svg" name="Reddit" href="https://www.reddit.com/r/skift" />
        <SocialItem image="static/twitter.svg" name="Twitter" href="https://twitter.com/search?q=%23skiftOS" />
      </div>
    </div>
  </Section>
}

function Footer() {
  return <div className="text-center p-8 flex flex-col items-center gap-4">
    <img className="w-10" src="static/skift.svg" alt="" />
    "The delightful operating system"<br />
    Copyright © 2018-2024 Cute Engineering<br />
    All rights reserved.<br />
    <a href="https://github.com/skift-org/website"> Source code</a>
    <img className="w-10" src="static/glider.svg" alt="" />
  </div>
}

function Page() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(static/wallpaper.png)" }}>
      <NavBar />
      <Hero />
      <div class="bg-gray-950">
        <Separator />
        <Goals />
        <Separator />
        <Features />
        <Separator />
        <Technologies />
        <Social />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
