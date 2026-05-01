import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-10 mt-4 flex items-center justify-between px-0 py-2">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-base font-medium text-foreground"
      >
        <img
          src="/assets/specra/logo.svg"
          alt=""
          className="h-8 w-8 rounded-xl border border-border invert"
        />
        <span>Specra</span>
      </Link>
      <nav className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link
          href="/"
          className="rounded-xl px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Blog
        </Link>
        <a
          href="https://specra.tech"
          className="rounded-xl bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary"
        >
          Product
        </a>
      </nav>
    </header>
  );
};

export default Header;
