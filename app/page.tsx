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
              I like to work with anything related to computers, but have been recently focusing <b>Web Technologies</b> and <b>Graphics</b>.
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
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">
          Latest Project
        </p>
        <div className="flex flex-col gap-2">
          <p>
            <span className="text-lg font-bold">{LATEST_PROJECT.title}</span> - <span className="text-sm text-muted-foreground">{LATEST_PROJECT.description}</span>
          </p>
          <Link className="hover:opacity-80 transition-opacity border rounded-xl overflow-hidden" href={LATEST_PROJECT.link} target="_blank" rel="noopener noreferrer">
            <Image src={LATEST_PROJECT.image} alt={LATEST_PROJECT.title} width={800} height={800} className="w-full h-full object-cover" />
          </Link>
        </div>
        <p>
          You can find more projects on my{" "}
          <Link href="https://github.com/NabilNYMansour#projects" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-muted-foreground">
            GitHub
          </Link>
          {" "}profile.
        </p>
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

export const LATEST_PROJECT = {
  title: "Phibelle",
  description: "A game engine that runs completely in the browser, built with Three.js, R3F and Typescript.",
  image: "/project.png",
  link: "https://phibelle.studio/",
}