/**
 * @TODO abstract and clean up this type
 */
interface Post {
  href: string;
  title: string;
  date: string;
  readTime: string;
}

interface PostListSectionProps {
  cta?: {
    href: string;
    text: string;
  };
  title: string;
  posts: Post[];
}

const PostListSection = ({ title, posts, cta }: PostListSectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {posts.map(({ href, title, date, readTime }) => {
          return (
            <li>
              <a href={href}>{title}</a>
              <p>Posted {date}</p>
              <p>{readTime}</p>
            </li>
          );
        })}
      </ul>
      {cta ? <a href={cta.href}>{cta.text}</a> : null}
    </section>
  );
};

export { PostListSection };
