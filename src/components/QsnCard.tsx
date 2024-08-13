interface qsnProps{
    qsn : string
}

export function QsnCard({qsn} : qsnProps) {
    return (
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <div className="p-4 bg-background">
          <p className="text-sm text-muted-foreground">
            {/* Display the content here */}
            {qsn}
          </p>
        </div>
      </div>
    )
}