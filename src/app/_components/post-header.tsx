import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Avatar name={author.name} picture={author.picture} />
        <div className="text-sm text-muted-foreground">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-10">
        <CoverImage title={title} src={coverImage} className="h-56 md:h-80" />
      </div>
    </>
  );
}
