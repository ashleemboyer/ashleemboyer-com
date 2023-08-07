import s from "./page-title-group.module.css";

interface PageTitleGroupProps {
  title: string;
  subtitle: string;
}

/**
 * Notes on the chosen HTML and ARIA (as of August 6th, 2023):
 *
 * - Without `role` or `aria-roledescription` set on the `hgroup` element, it is
 *   not exposed in any interesting way to assitive technology in the
 *   accessibilty tree.
 * - With `role` and `aria-description` set on the `hgroup` element and
 *   `aria-roledescription` set on the `p` element, ambiguity about these
 *   elements and their relation to one another is removed.
 * - Until browsers add more semantics to the `hgroup` element, the guidance
 *   today for subtitles/subheadings is to provide information to assistive
 *   technologies. They might not use it, but that is up to their developers.
 *
 * Resources:
 *  - https://www.tpgi.com/subheadings-subtitles-alternative-titles-and-taglines-in-html/
 *  - https://www.a11yproject.com/posts/how-to-accessible-heading-structure/#hgroup
 *  - https://www.w3.org/TR/wai-aria-1.2/#dfn-accessibility-tree
 *  - https://www.w3.org/TR/wai-aria-1.2/#aria-roledescription
 */
const PageTitleGroup = ({ title, subtitle }: PageTitleGroupProps) => {
  return (
    <hgroup
      role="group"
      aria-roledescription="heading group"
      className={s.hgroup}
    >
      <h1 className={s.title}>{title}</h1>
      <p aria-roledescription="subtitle" className={s.subtitle}>
        {subtitle}
      </p>
    </hgroup>
  );
};

export { PageTitleGroup };
