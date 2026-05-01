import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2.5 text-sm font-medium">
              <img
                src="/assets/specra/logo.svg"
                alt=""
                className="h-6 w-6 rounded-xl invert"
              />
              <span>Specra</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Design context, tools, and workflows for AI agents that build UI
              close to the source material.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a
              href="https://specra.tech"
              className="rounded-xl bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary"
            >
              Open Specra
            </a>
            <a
              href="https://docs.specra.tech/docs"
              className="rounded-xl px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Docs
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
