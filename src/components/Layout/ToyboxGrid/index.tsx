import React, { FunctionComponent } from "react"
import styles from "./ToyboxGrid.module.scss"

export const ToyboxGrid: FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.toyboxGrid}>{children}</div>
}
