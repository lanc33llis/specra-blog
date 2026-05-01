import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

const CoverImage = ({ title, src, slug, className }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("h-full w-full object-cover", {
        "transition duration-300 group-hover:scale-105": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-muted sm:mx-0",
        className,
      )}
    >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
