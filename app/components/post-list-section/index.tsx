import { IconArrowRight } from 'components';
import s from './post-list-section.module.css';

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
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {posts.map(({ href, title, date, readTime }) => {
          return (
            <li className={s.listItem}>
              <a className={s.postTitle} href={href}>
                {title}
              </a>
              <div>
                <p className={s.postDate}>Posted {date}</p>
                <p className={s.readTime}>{readTime}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {cta ? (
        <a className={s.cta} href={cta.href}>
          {cta.text}
          <IconArrowRight />
        </a>
      ) : null}
    </section>
  );
};

export { PostListSection };
