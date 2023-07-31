import s from "./page-title-group.module.css";

interface PageTitleGroupProps {
  title: string;
  subtitle: string;
}

/**
 * TODO write comment about chosen HTML, referencing:
 * https://www.tpgi.com/subheadings-subtitles-alternative-titles-and-taglines-in-html/
 */
const PageTitleGroup = ({ title, subtitle }: PageTitleGroupProps) => {
  return (
    <hgroup className={s.hgroup}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.subtitle}>{subtitle}</p>
    </hgroup>
  );
};

export { PageTitleGroup };
