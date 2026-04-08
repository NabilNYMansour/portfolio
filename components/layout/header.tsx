import ThemeToggle from "../elements/theme-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background w-full flex justify-center border-b">
      <div className="px-4 py-2 max-w-4xl w-full flex justify-between items-center">
        <div className="flex gap-8 [&>a]:hover:opacity-80 transition-opacity">
          <a href={LINKS.articles} target="_blank" rel="noopener noreferrer">Articles</a>
          <a href={LINKS.projects} target="_blank" rel="noopener noreferrer">Projects</a>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header

export const LINKS = {
  articles: "https://medium.com/@nabilnymansour",
  projects: "https://github.com/NabilNYMansour#projects",
  resume: "/NNYM_Resume.pdf",
}