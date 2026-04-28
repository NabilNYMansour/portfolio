import { MediumIcon, ShaderToyIcon } from "@/components/elements/custom-icons";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import Image from "next/image"
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Page() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex gap-4 sm:flex-row flex-col items-center">
        <div className="border rounded-xl overflow-hidden w-fit h-fit min-w-64 min-h-64">
          <Image src="/profile.jpeg" alt="Profile" width={256} height={256} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">
            Hi <span className="wave">👋</span>, I&apos;m Nabil Mansour
          </p>
          <div className="flex flex-col gap-2">
            <p>
              I&apos;m a software engineer from <b>Toronto</b> and <b>MScAC</b> student at <b>University of Toronto</b>.
            </p>
            <p>
              I like to work with anything related to computers, but have been recently focusing <b>web technologies</b> and <b>graphics</b>.
            </p>
            <p>
              You can contact me and find more about me on the links below:
            </p>
            <div className="flex gap-2 justify-center sm:justify-start flex-wrap">
              {CONTACTS.map((contact) => (
                <Tooltip key={contact.title}>
                  <TooltipTrigger>
                    <Button key={contact.title} variant="outline" size="icon-lg" aria-label={contact.title} asChild>
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        {contact.icon}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {contact.title}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold flex items-center gap-2">
          YouTube Channel <FaYoutube size={28} />
        </p>
        <div className="flex flex-col gap-2">
          <p>
            I have a{" "}
            <Link
              href="https://www.youtube.com/@nabilnymansour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-muted-foreground"
            >
              YouTube
            </Link>
            {" "}channel where I post devlogs and videos about graphics programming, computer science, game development, and other topics related to technology.
          </p>
          <p>
            Here&apos;s one of my devlog videos for my game,{" "}
            <Link
              href="https://store.steampowered.com/app/2565200/Fractal_Glide/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-muted-foreground font-bold"
            >
              FRACTAL GLIDE
            </Link>:
          </p>
          <iframe
            src="https://www.youtube.com/embed/qUBA8Xotc4o?si=ml3y3Xf9RcSlEFWR"
            title="YouTube video player"
            className="w-full aspect-video rounded-xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <Separator />
      <div id="projects" className="flex flex-col gap-4 scroll-mt-14">
        <p className="text-2xl font-bold">
          Projects
        </p>
        <div className="flex flex-col gap-2">
          {PROJECTS.map((project) => (
            <p key={project.title}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold underline hover:text-muted-foreground"
              >
                {project.title}
              </Link>{" "}
              - <span className="text-sm text-muted-foreground">
                {project.description}
                {project.descriptionLink && (
                  <>
                    {" "}
                    <Link
                      href={project.descriptionLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      {project.descriptionLink.label}
                    </Link>
                  </>
                )}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CONTACTS = [
  {
    link: "https://www.youtube.com/@nabilnymansour",
    title: "YouTube",
    icon: <FaYoutube size={28} />,
  },
  {
    link: "https://medium.com/@nabilnymansour",
    title: "Medium",
    icon: <MediumIcon size={20} />,
  },
  {
    link: "https://x.com/nabilnymansour",
    title: "Twitter/X",
    icon: <FaXTwitter size={24} />,
  },
  {
    link: "https://www.linkedin.com/in/nnym/",
    title: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    link: "https://github.com/NabilNYMansour",
    title: "GitHub",
    icon: <AiFillGithub size={28} />,
  },
  {
    link: "https://www.shadertoy.com/user/chickenlegs",
    title: "ShaderToy",
    icon: <ShaderToyIcon size={20} />,
  },
  // {
  //   link: "/NNYM_Resume.pdf",
  //   title: "Resume",
  //   icon: <BsFillFileEarmarkPersonFill size={24} />,
  // },
  {
    link: "mailto:nabilnymansour@gmail.com",
    title: "Email",
    icon: <MdEmail size={28} />,
  },
];

export const PROJECTS = [
  {
    title: "Phibelle Engine",
    description: "A web game engine",
    link: "https://phibelle.studio/",
  },
  {
    title: "QRCodeer",
    description: "A simple and easy-to-use free QR code generator. No account needed",
    link: "https://www.qrcodeer.dev/",
  },
  {
    title: "SECRETeer",
    description: "End-to-end encrypted secret sharing platform. No account needed also. Completely free",
    link: "https://secreteer.dev/",
  },
  {
    title: "Excalihub",
    description: "A free platform for creating and sharing Excalidraw drawings",
    link: "https://excalihub.dev/",
  },
  {
    title: "Fractal Glide",
    description: "A fractal game where the player glides through fractal landscapes (available on Steam!)",
    link: "https://store.steampowered.com/app/2565200/Fractal_Glide/",
  },
  {
    title: "Medium to Markdown",
    description: "A web app that converts Medium articles to markdown files",
    link: "https://medium2md.nabilmansour.com/",
  },
  {
    title: "Unity FractiX",
    description: "Open-source ray/cone marching rendering engine written as a post-effect to the Unity rendering pipeline",
    link: "https://github.com/NabilNYMansour/Unity-FractiX",
  },
  {
    title: "Neuro Gambit",
    description: "An artificial neural network made and trained using PyTorch to play chess",
    link: "https://github.com/NabilNYMansour/Neuro-Gambit",
  },
  {
    title: "Fractal Explorer",
    description: "A VR experience where the player explores an endless fractal world made with the ray marching algorithm",
    link: "https://github.com/NabilNYMansour/Fractal-Explorer",
  },
  {
    title: "Slime Simulation",
    description: "An implementation of slime mold cellular automata written in Python",
    link: "https://github.com/NabilNYMansour/Slime-Simulation",
  },
  {
    title: "PyLisp",
    description: "A Lisp interpreter written in Python loosely following John McCarthy's",
    descriptionLink: {
      href: "https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/PL/LISP.pdf",
      label: "original Lisp paper",
    },
    link: "https://github.com/NabilNYMansour/PyLisp",
  },
  {
    title: "Self Parallel Parking Arduino Car",
    description: "An Arduino car that parallel parks on its own",
    link: "https://github.com/NabilNYMansour/CPS607-Self-Parallel-Parking",
  },
  {
    title: "Wireless Arduino RC Car",
    description: "A wireless Arduino RC car made out of cardboard and controlled using radio antennas",
    link: "https://github.com/NabilNYMansour/Wireless-RC-Car",
  },
  {
    title: "Voxel Terrain",
    description: "A Unity demo that showcases a randomly generated voxel terrain based on Minecraft",
    link: "https://github.com/NabilNYMansour/Voxel-Terrain",
  },
];