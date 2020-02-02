import React, {
  FunctionComponent,
  useReducer,
  useEffect,
  useCallback,
} from "react"
import { SnakeRenderer } from "./SnakeRenderer"
import { snakeReducer, initial } from "./reducer"
import { actRefreshModel, actStartGame } from "./actions"
import { GameplayState } from "./types"
import { dispatchDirectionChangesOnKeypress } from "./functions"

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

  const startNewGame = useCallback(() => dispatch(actStartGame()), [])

  return <SnakeRenderer state={state} startNewGame={startNewGame} />
}
