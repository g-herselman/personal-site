import { Reducer } from "react"
import { SnakeActions } from "./actions"
import { SnakePoint, Direction, GameplayState } from "./types"
import {
  updatePoints,
  getIsPerpendicular,
  getHasCollision,
  getRandomFoodPoint,
  getWillEat,
} from "./functions"
import { lengthToAddWhenEat } from "./constants"

export type SnakeState = {
  gameplayState: GameplayState
  direction: Direction
  speed: number
  points: SnakePoint[]
  foodPoint: SnakePoint
  score: number
  lengthToAdd: number
}

const initialPoints: SnakePoint[] = [
  [0, 50],
  [20, 50],
]

export const initial: SnakeState = {
  gameplayState: GameplayState.PLAYING,
  direction: Direction.RIGHT,
  speed: 20,
  points: initialPoints,
  foodPoint: getRandomFoodPoint(),
  score: 0,
  lengthToAdd: 0,
}

export const snakeReducer: Reducer<SnakeState, SnakeActions> = (
  state,
  action
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameplayState: GameplayState.PLAYING,
        points: initialPoints,
        direction: Direction.RIGHT,
        foodPoint: getRandomFoodPoint(),
        score: 0,
        speed: 20,
      }

    case "REFRESH_MODEL":
      const { speed, lengthToAdd, foodPoint, score } = state
      const lengthMoved = (action.timeDiffInMs / 1000) * speed
      const newPoints = updatePoints(state, lengthMoved)
      const hasCollision = getHasCollision(newPoints)
      const willEat = getWillEat(newPoints, foodPoint)
      const lengthToAddAfterMove = Math.max(0, lengthToAdd - lengthMoved)
      if (hasCollision) {
        return {
          ...state,
          gameplayState: GameplayState.GAME_OVER,
          points: newPoints,
        }
      }

      if (willEat) {
        return {
          ...state,
          points: newPoints,
          lengthToAdd: lengthToAddAfterMove + lengthToAddWhenEat,
          foodPoint: getRandomFoodPoint(),
          score: score + speed,
          speed: speed + 5,
        }
      }

      return {
        ...state,
        points: newPoints,
        lengthToAdd: lengthToAddAfterMove,
      }

    case "CHANGE_DIRECTION":
      const validMove = getIsPerpendicular(state.direction, action.newDirection)
      if (validMove)
        return {
          ...state,
          direction: action.newDirection,
        }

      return state
  }
  return state
}
