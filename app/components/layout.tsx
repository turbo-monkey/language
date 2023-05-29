import type { ReactElement } from "react";
import * as React from "react";
import styles from "./layout.module.css";

type BaseProps = {
    children: React.ReactNode;
};

function Footer(props: BaseProps): React.ReactElement {
    return (
        <footer role="contentinfo" className={styles["footer-container"]}>
            <div className={styles["footer"]}>{props.children}</div>
        </footer>
    );
}

function FooterMenu(props: BaseProps) {
    return <div className={styles["footer-menu"]}>{props.children}</div>;
}

function FooterMenuTitle(props: BaseProps): ReactElement {
    return <h3 className={styles["footer-menu-title"]}>{props.children}</h3>;
}

function FooterLinks(props: BaseProps): React.ReactElement {
    return <ul className={styles["footer-links"]}>{props.children}</ul>;
}

type FooterLinkProps = BaseProps & React.HTMLProps<HTMLAnchorElement>;

function FooterLink(props: FooterLinkProps): React.ReactElement {
    return <li>{props.children}</li>;
}

function FooterNewsletter(props: BaseProps): React.ReactElement {
    return <div>{props.children}</div>;
}

function Layout(props: BaseProps): React.ReactElement {
    return <div className={styles.layout}>{props.children}</div>;
}

function Main(props: BaseProps): React.ReactElement {
    return (
        <main role="main" className={styles.main}>
            {props.children}
        </main>
    );
}

function Heading(props: BaseProps): React.ReactElement {
    return <h1 className={styles.heading}>{props.children}</h1>;
}

function Navigation(props: BaseProps): React.ReactElement {
    return (
        <div className={styles["navigation-container"]}>
            <nav className={styles.navigation}>{props.children}</nav>
        </div>
    );
}

function NavigationBrand(props: BaseProps): React.ReactElement {
    return <div className={styles["navigation-brand"]}>{props.children}</div>;
}

function NavigationMenu(props: BaseProps): React.ReactElement {
    return <ul className={styles["navigation-menu"]}>{props.children}</ul>;
}

function NavigationLink(props: BaseProps): React.ReactElement {
    return (
        <li className={styles["navigation-list-item"]}>
            <a href="/" className={styles["navigation-link"]}>
                {props.children}
            </a>
        </li>
    );
}

type NotificationProps = BaseProps & {
    title: string;
};

function Notification(props: NotificationProps): React.ReactElement {
    return <div className="page__notification">{props.children}</div>;
}

function NotificationIcon(props: BaseProps): React.ReactElement {
    return <div className="page__notification__icon">{props.children}</div>;
}

function Spacer(): React.ReactElement {
    return <div className="page__spacer"></div>;
}

function Subheading(props: BaseProps): React.ReactElement {
    return <h2>{props.children}</h2>;
}

function Teaser(props: BaseProps): React.ReactElement {
    return <div>{props.children}</div>;
}

function Header(props: BaseProps): React.ReactElement {
    return <header className={styles.header}>{props.children}</header>;
}

function Section(props: BaseProps): React.ReactElement {
    return <div className={styles.section}>{props.children}</div>;
}

function SectionHeading(props: BaseProps): React.ReactElement {
    return <h2>{props.children}</h2>;
}

function SectionSubheading(props: BaseProps): React.ReactElement {
    return <h3 className={styles["section-subheading"]}>{props.children}</h3>;
}

function SectionContent(props: BaseProps): React.ReactElement {
    return <div>{props.children}</div>;
}

type PageHeroProps = BaseProps & {
    src: string;
    alt?: string;
};

function PageHero(props: PageHeroProps): React.ReactElement {
    return (
        <div>
            <div
                className={styles.hero}
                style={{ backgroundImage: `url(${props.src})` }}
            >
                <div className={styles["hero-content"]}>{props.children}</div>
            </div>
        </div>
    );
}

Layout.Footer = Footer;
Layout.FooterLink = FooterLink;
Layout.FooterList = FooterLinks;
Layout.FooterMenuTitle = FooterMenuTitle;
Layout.FooterMenu = FooterMenu;
Layout.Header = Header;
Layout.Heading = Heading;
Layout.Hero = PageHero;
Layout.Main = Main;
Layout.Navigation = Navigation;
Layout.NavigationBrand = NavigationBrand;
Layout.NavigationLink = NavigationLink;
Layout.NavigationMenu = NavigationMenu;
Layout.Newsletter = FooterNewsletter;
Layout.Notification = Notification;
Layout.NotificationIcon = NotificationIcon;
Layout.Section = Section;
Layout.SectionContent = SectionContent;
Layout.SectionHeading = SectionHeading;
Layout.SectionSubheading = SectionSubheading;
Layout.Spacer = Spacer;
Layout.Subheading = Subheading;
Layout.Teaser = Teaser;

export default Layout;
