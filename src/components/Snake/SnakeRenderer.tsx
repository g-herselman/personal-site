import React, { FunctionComponent } from "react"
import { GameplayState } from "./types"
import { SnakeState } from "./reducer"
import { SnakePathSvgRenderer } from "./SnakePathSvgRenderer"
import styles from "./Snake.module.scss"

export const SnakeRenderer: FunctionComponent<{
  state: SnakeState
  startNewGame: () => void
}> = ({ state, startNewGame }) => {
  const { points, gameplayState, score, foodPoint } = state

  return (
    <>
      <div className={styles.snakeContain}>
        {gameplayState === GameplayState.GAME_OVER && (
          <div className={styles.gameOver}>
            <h1>GAME OVER</h1>
            <h3>Score: {score}</h3>
            <div onClick={startNewGame}>
              <h3>Start Again</h3>
            </div>
          </div>
        )}
        <SnakePathSvgRenderer points={points} foodPoint={foodPoint} />
      </div>
    </>
  )
}
