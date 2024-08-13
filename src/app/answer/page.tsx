"use client";
import { QsnCard } from "@/components/qsnCard";
import { qnsFromDB } from "../hooks";

export default function Answer() {
  const { loading, post } = qnsFromDB();

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="space-y-4 md:space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Answer to Questions</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Got a question? Share your answers to the questions below and help others with the questions they've asked.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
         
            {post && post.length > 0 ? (
              post.map((post, index) => (
                <QsnCard key={index} qsn={post.qsn} />
              ))
            ) : (
              <div>No questions available</div>
            )}       
          </div>
        
      </div>
    </section>
  );
}
