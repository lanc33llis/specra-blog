import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-3 transition-colors hover:bg-accent">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="mb-3 text-sm text-muted-foreground">
        <DateFormatter dateString={date} />
      </div>
      <h3 className="mb-3 text-2xl font-medium leading-snug text-foreground">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="transition-colors hover:text-muted-foreground"
        >
          {title}
        </Link>
      </h3>
      <p className="mb-6 flex-1 text-base leading-7 text-muted-foreground">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </article>
  );
}
