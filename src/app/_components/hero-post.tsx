import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="grid gap-6 rounded-xl border border-border bg-card p-5 md:grid-cols-2 md:p-7">
        <div>
          <div className="mb-4 inline-flex rounded-md border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            Latest
          </div>
          <h2 className="mb-4 max-w-2xl text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="transition-colors hover:text-muted-foreground"
            >
              {title}
            </Link>
          </h2>
          <div className="text-sm text-muted-foreground">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-6 text-base leading-7 text-muted-foreground">
            {excerpt}
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
