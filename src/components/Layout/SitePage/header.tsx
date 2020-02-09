import React, { FunctionComponent } from "react"
import styles from "./SitePage.module.scss"
import { Slashes } from "../../Atoms/Slashes"
import { Link } from "gatsby"

export const CascadeLink = props => {
  const className =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith(props.to)
      ? styles.active
      : ""
  return <Link className={className} {...props} />
}

export const Header: FunctionComponent<{ sublinks?: ReactNode }> = ({
  sublinks,
}) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Slashes />
      <h1>G.Herselman</h1>
    </div>
    <div className={styles.linkRow}>
      <CascadeLink to={"/cv"}>CV</CascadeLink>
      {/* <CascadeLink to={"/contact"}>Contact</CascadeLink> */}
      <CascadeLink to={"/toybox"}>Toybox</CascadeLink>
    </div>
    {sublinks && <div className={styles.linkRow}>{sublinks}</div>}
  </header>
)
