import { Direction } from "./types"

export type SnakeActions = ActRefreshModel | ActChangeDirection | ActStartGame

type ActRefreshModel = {
  type: "REFRESH_MODEL"
  timeDiffInMs: number
}

export const actRefreshModel = (timeDiffInMs: number): ActRefreshModel => ({
  type: "REFRESH_MODEL",
  timeDiffInMs,
})

type ActChangeDirection = {
  type: "CHANGE_DIRECTION"
  newDirection: Direction
}

export const actChangeDirection = (
  newDirection: Direction
): ActChangeDirection => ({
  type: "CHANGE_DIRECTION",
  newDirection,
})

type ActStartGame = {
  type: "START_GAME"
}

export const actStartGame = (): ActStartGame => ({ type: "START_GAME" })
