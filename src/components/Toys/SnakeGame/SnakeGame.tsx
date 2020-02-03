import React, {
  FunctionComponent,
  useReducer,
  useEffect,
  useCallback,
} from "react"
import { snakeReducer, initial } from "./reducer"
import { actRefreshModel, actStartGame } from "./actions"
import { GameplayState } from "./types"
import { dispatchDirectionChangesOnKeypress } from "./functions"
import { SnakePathSvgRenderer } from "./SnakePathSvgRenderer"
import styles from "./SnakeGame.module.scss"

export const SnakeGame: FunctionComponent<{}> = () => {
  const [state, dispatch] = useReducer(snakeReducer, initial)

  useEffect(() => {
    addEventListener("keydown", dispatchDirectionChangesOnKeypress(dispatch))
  }, [])

  useEffect(() => {
    let animationRequestId: number

    if (state.gameplayState === GameplayState.PLAYING) {
      const animationLoop = (previousTime: number) => {
        animationRequestId = requestAnimationFrame(newTime => {
          dispatch(actRefreshModel(newTime - previousTime))
          animationLoop(newTime)
        })
      }

      animationLoop(performance.now())

      return () => {
        cancelAnimationFrame(animationRequestId)
      }
    }

    cancelAnimationFrame(animationRequestId)
  }, [state.gameplayState])

  const { gameplayState, score, points, foodPoint } = state
  return (
    <div className={styles.snakeContain}>
      {gameplayState === GameplayState.GAME_OVER && (
        <div className={styles.menu}>
          <h1>GAME OVER</h1>
          <h3>Score: {score}</h3>
          <div onClick={() => dispatch(actStartGame())}>
            <h3>Start Again</h3>
          </div>
        </div>
      )}
      <div className={styles.game}>
        <SnakePathSvgRenderer points={points} foodPoint={foodPoint} />
      </div>
    </div>
  )
}
