"use client"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"


export default function QuestionSec() {
  const [loading, setLoading] = useState(false);
  const [input , setInput] = useState({
    qsn : ""
  })

  async function sendQsn(){
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:3000/api/post`, input);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting question:', error);
    }
    finally {
      setLoading(false); // Stop the loader
    }
  }
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
                <Textarea onChange={(e) => {
                  setInput({
                    ...input,
                    qsn:e.target.value
                  })
                }} id="question" placeholder="Enter your question" className="min-h-[100px]" />
              </div>
              <Button onClick={sendQsn} type="submit" className="w-full"  disabled={loading}>
                {loading ? 'Laoding' : 'Sumbit'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}