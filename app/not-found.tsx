import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[75vh]">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <p className="text-sm text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="text-sm text-primary underline hover:text-muted-foreground">Go back to the home page</Link>
    </div>
  )
}

export default NotFound