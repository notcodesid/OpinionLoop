
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function QuestionSec() {
  return (
    <div className="w-full">
      <section className="w-full h-screen py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ask Me Anything</h1>
            <p className="text-muted-foreground md:text-xl">
              Have a question? Submit it below and I'll do my best to provide a helpful answer.
            </p>
            <form className="w-full max-w-md mx-auto space-y-4">
              <div className="space-y-2">
                <Label htmlFor="question">Your Question</Label>
                <Textarea id="question" placeholder="Enter your question" className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}