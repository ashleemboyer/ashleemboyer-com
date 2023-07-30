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
      </body>
    </html>
  );
};

export default RootLayout;
