"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"

export default function Appbar() {
    function signIn(): void {
        throw new Error("Function not implemented.")
    }

  return (
    <header className="bg-background w-full py-4 px-6 md:px-8 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">AskMeAnything</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => signIn()}
        >
          Sign Up
        </Link>
        <Button
          variant="outline"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-2"
        >
          Logout
        </Button>
      </div>
    </header>
  )
}

