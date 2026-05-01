export function Intro() {
  return (
    <section className="mb-12 mt-4 grid gap-6 md:grid-cols-2 md:items-end">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-xl bg-primary" />
          Blog
        </div>
        <h1 className="max-w-3xl text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Notes on cohesive interfaces for AI-built products.
        </h1>
      </div>
      <div className="flex flex-col justify-end gap-5 text-base leading-7 text-muted-foreground">
        <p>
          Field notes from Specra on design context, evaluation loops, and the
          product surfaces agents need to build consistent UI.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-normal text-foreground">DESIGN.md</p>
            <p className="mt-1 text-muted-foreground">Reusable UI context</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-normal text-foreground">Evaluate UI</p>
            <p className="mt-1 text-muted-foreground">Grounded iteration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
