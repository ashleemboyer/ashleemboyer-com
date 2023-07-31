import s from "./site-header.module.css";

const SITE_LINKS = [
  { href: "/about", text: "about" },
  { href: "/blog", text: "blog" },
  { href: "/rss", text: "rss" },
  { href: "/talks", text: "talks" },
  { href: "/resume", text: "resume" },
];

const SiteHeader = () => {
  return (
    <header className={s.header}>
      <a className={s.homeLink} href="/">
        <img alt="home" src="amb.svg" height="48" width="auto" />
      </a>
      <nav>
        <ul className={s.navList}>
          {SITE_LINKS.map(({ href, text }) => {
            return (
              <li key={href}>
                <a className={s.navListLink} href={href}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export { SiteHeader };
