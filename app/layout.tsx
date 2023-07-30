import { ReactNode } from "react";

const SITE_LINKS = [
  { href: "/about", text: "about" },
  { href: "/blog", text: "blog" },
  { href: "/rss", text: "rss" },
  { href: "/talks", text: "talks" },
  { href: "/resume", text: "resume" },
];

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        {/* TODO move header element to separate component */}
        <header>
          <a href="/">
            <img alt="home" src="amb.svg" height="48" width="auto" />
          </a>
          <nav>
            <ul>
              {SITE_LINKS.map(({ href, text }) => {
                return (
                  <li key={href}>
                    <a href={href}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <div>{children}</div>
        {/* TODO move footer element to separate component */}
        <footer>
          <p>© 2023 Ashlee M Boyer</p>
          <p>
            <a href="https://github.com/ashleemboyer/ashleemboyer-com-issues-and-questions/issues/new/choose">
              Report an issue or ask a question
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
