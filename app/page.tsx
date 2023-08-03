import { PageTitleGroup, PostListSection } from './components';

const RECOMMENDED_WRITINGS = [
  {
    href: '',
    title: 'What the heck is "web a11y"?',
    date: 'Jul 6, 2021',
    readTime: '5 minute read',
  },
  {
    href: '',
    title: 'Three Starting Points for Making Accessible Digital Content',
    date: 'May 27, 2021',
    readTime: '5 minute read',
  },
  {
    href: '',
    title: 'How I Added an RSS Feed to My Next.js Site',
    date: 'Jul 26, 2020',
    readTime: '5 minute read',
  },
  {
    href: '',
    title: 'Accessible, Smooth Scroll-to-top Buttons with Little Code',
    date: 'Nov 26, 2020',
    readTime: '5 minute read',
  },
];

const MOST_RECENT_WRITINGS = [
  {
    href: '',
    title:
      'Being Vulnerable is Traumatic: What the Push for Storytelling in DEI Misses',
    date: 'Jun 24, 2024',
    readTime: '6 minute read',
  },
  {
    href: '',
    title: 'My Neurodivergent Narrtives #1',
    date: 'Mar 27, 2023',
    readTime: '6 minute read',
  },
  {
    href: '',
    title: "Don't Overwrite Visual Labels With `aria-label`",
    date: 'Sep 1, 2022',
    readTime: '8 minute read',
  },
  {
    href: '',
    title: 'Should I Use a Button or a Link?',
    date: 'Aug 29, 2022',
    readTime: '14 minute read',
  },
];

const Page = () => {
  return (
    <>
      <PageTitleGroup
        title="Ashlee M Boyer"
        subtitle="Disabled & Neurodivergent Software Engineer and Web Accessibility Expert"
      />
      <PostListSection
        title="Recommended writings"
        posts={RECOMMENDED_WRITINGS}
      />
      <PostListSection
        title="Most recent writings"
        posts={MOST_RECENT_WRITINGS}
        cta={{ text: 'Read all posts', href: '/blog' }}
      />
    </>
  );
};

export default Page;
