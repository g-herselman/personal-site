import React, { FunctionComponent } from "react"
import styles from "./DirectionPad.module.scss"
import { Direction } from "./types"

export const DirectionPad: FunctionComponent<{
  changeDirection: (direction: Direction) => void
}> = ({ changeDirection }) => {
  if (
    typeof navigator === "undefined" ||
    typeof navigator.maxTouchPoints !== "number" ||
    navigator.maxTouchPoints < 1
  )
    return <></>

  const Circle = ({ direction }) => (
    <svg width="115%" viewBox="0 0 4 4">
      <circle
        fill="#00000022"
        r="2"
        cx="2"
        cy="2"
        onTouchStart={() => changeDirection(direction)}
      />
    </svg>
  )

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.up}>
        <Circle direction={Direction.UP} />
      </div>
      <div className={styles.down}>
        <Circle direction={Direction.DOWN} />
      </div>
      <div className={styles.left}>
        <Circle direction={Direction.LEFT} />
      </div>
      <div className={styles.right}>
        <Circle direction={Direction.RIGHT} />
      </div>
    </div>
  )
}
