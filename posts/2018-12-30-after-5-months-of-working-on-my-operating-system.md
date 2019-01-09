---
layout: post
title: After 5 months of working on my operating system, here is where I am...
author: Monax
---

# Where I came from

I've started OSDEV with [this](https://arjunsreedharan.org/post/82710718100/kernels-101-lets-write-a-kernel) tutorial around march 2017, and made my first  kernel using bits and pieces found online (OSDEV, GITHUB... ) 🤦‍♂️ it was called "core-one".  It was a cooperative multitasking kernel with no userspace because bad code mean impossible to build a proper userspace on top of that I gave up... 🤷‍♂️



Until June of 2018, in this time my exams when really bad and I was like in the bottom of the pit and I just wanted to free my mind a little bit from all these existential questions about what I was going to do with my life and stuff. So between two hours of study I started carefully reading [a tutorial in French](https://michelizza.developpez.com/realiser-son-propre-systeme/), then most of OSDEV.org tutorials, because I didn't really have much else to do anyway and then i set a goal i'm going to go back to my OS and by the end of the year it should be able to run this program in userspace.

    #include <stdio.h>
    
    int main(int argc, char** argv)
    {
        printf("Hello, world!");
        return 0;
    }

Yes, I know this is juste a simple "hello world" program but for me this was a simple goal i my reach



# Where I'am now

After 5 mouth of work I have:

* Managed to get a "hello world" running in user space



* made a cool little kernel supporting: processes and threads, message passing, shared memory, ELF loading...



* ported my first software to it: [https://github.com/klange/nyancat](https://github.com/klange/nyancat) this required me to write a simple escape sequence parser for really basic cursor movement and changing colors



* Started working on a window manager and compositor called hideo (in reference of **Hideo Yutani** the CEO of Weyland-Yutani in alien)



* And the cherry on top: a cool logo 😊



# Where I would like to be

In the next year i would like to:

* continue working on my kernel to become a microkernel
* expand my libc
* port lua
* get my desktop environment to a usable state, with file manager, terminal emulator and a text editor.



# Thanks

Thanks for reading me, it really important for me to share with you what i've done with my project, because if not, what's the point 😄



OSDEV is a lot of fun, I hope you have as much fun as I do. Happy New Year to all of you,



monax

lead developer on the [skiftOS](https://github.com/maker-dev/skift) project