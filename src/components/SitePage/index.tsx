import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styles from "./SitePage.module.scss"
import { Slashes } from "../Slashes"

const QuickLink = props => <Link activeClassName={styles.active} {...props} />

export const SitePage: FunctionComponent<{}> = ({ children = null }) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>G.Herselman</title>
        <html style="background-image: radial-gradient(circle at top left, #eefdfe, #d6bef3 100%)" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Slashes />
          <h1>G.Herselman</h1>
        </div>
        <div className={styles.linkRow}>
          <QuickLink to={"/cv"}>CV</QuickLink>
          <QuickLink to={"/contact"}>Contact</QuickLink>
          <QuickLink to={"/toybox"}>Toybox</QuickLink>
        </div>
      </div>
      <div className="page-contents">{children}</div>
    </div>
  )
}
