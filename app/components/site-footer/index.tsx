import s from "./site-footer.module.css";

const SiteFooter = () => {
  return (
    <footer className={s.footer}>
      <p>© 2023 Ashlee M Boyer</p>
      <p>
        <a href="https://github.com/ashleemboyer/ashleemboyer-com-issues-and-questions/issues/new/choose">
          Report an issue or ask a question
        </a>
      </p>
    </footer>
  );
};

export { SiteFooter };
