import { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./components";
import "./global.css";
import s from "./root-layout.module.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={s.body}>
        <SiteHeader />
        <div>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
};

export default RootLayout;
