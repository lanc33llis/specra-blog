import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="mb-24">
      <h2 className="mb-6 text-2xl font-semibold leading-tight sm:text-3xl">
        More from Specra
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
