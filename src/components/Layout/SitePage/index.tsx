import React, { FunctionComponent, ReactNode } from "react"
import { Link } from "gatsby"
import styles from "./SitePage.module.scss"
import { Slashes } from "../../Atoms/Slashes"
import Helmet from "react-helmet"

export const CascadeLink = props => {
  const className =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith(props.to)
      ? styles.active
      : ""
  return <Link className={className} {...props} />
}

export const SitePage: FunctionComponent<{ sublinks?: ReactNode }> = ({
  children = null,
  sublinks,
}) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>G.Herselman</title>
      </Helmet>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Slashes />
          <h1>G.Herselman</h1>
        </div>
        <div className={styles.linkRow}>
          <CascadeLink to={"/cv"}>CV</CascadeLink>
          <CascadeLink to={"/contact"}>Contact</CascadeLink>
          <CascadeLink to={"/toybox"}>Toybox</CascadeLink>
        </div>
        {sublinks && <div className={styles.linkRow}>{sublinks}</div>}
      </div>
      <div className="page-contents">{children}</div>
    </div>
  )
}
