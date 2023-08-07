/**
 * @TODO clean up this type when it's more widely used (e.g. readTime probably
 * won't be a string)
 */
interface Post {
  href: string;
  title: string;
  date: string;
  readTime: string;
}

export type { Post };
