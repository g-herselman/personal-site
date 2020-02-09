import React, { FunctionComponent, ReactNode } from "react"
import "../../../styles/main.scss"
import styles from "./SitePage.module.scss"
import { Slashes } from "../../Atoms/Slashes"
import { Header } from "./header"
import Helmet from "react-helmet"

export const SitePage: FunctionComponent<{ sublinks?: ReactNode }> = ({
  children = null,
  sublinks,
}) => {
  return (
    <div className="container">
      <Helmet>
        <title>G.Herselman</title>
      </Helmet>
      <Header sublinks={sublinks} />
      {children}
    </div>
  )
}
