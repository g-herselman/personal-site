import { SnakeState } from "./reducer"
import { SnakePoint, Direction } from "./types"
import { Dispatch } from "react"
import { SnakeActions, actChangeDirection } from "./actions"
import { playFieldSize, foodReach } from "./constants"

const getDirection = (
  fromPoint: SnakePoint,
  toPoint: SnakePoint
): Direction => {
  const directionIsVertical = fromPoint[0] === toPoint[0]
  if (directionIsVertical) {
    if (fromPoint[1] - toPoint[1] > 0) return Direction.UP
    return Direction.DOWN
  }
  if (fromPoint[0] - toPoint[0] < 0) return Direction.RIGHT
  return Direction.LEFT
}

const getLength = (fromPoint: SnakePoint, toPoint: SnakePoint): number => {
  const directionIsVertical = fromPoint[0] === toPoint[0]
  if (directionIsVertical) return Math.abs(toPoint[1] - fromPoint[1])
  return Math.abs(toPoint[0] - fromPoint[0])
}

const movePointAlong = (
  point: SnakePoint,
  direction: Direction,
  length: number
): SnakePoint => {
  switch (direction) {
    case Direction.UP:
      return [point[0], point[1] - length]
    case Direction.DOWN:
      return [point[0], point[1] + length]
    case Direction.RIGHT:
      return [point[0] + length, point[1]]
    case Direction.LEFT:
      return [point[0] - length, point[1]]
  }
}

const updateTailSegment = (
  points: SnakePoint[],
  lengthToDrop: number
): SnakePoint[] => {
  const tailPoint = points[0]
  const nextTailPoint = points[1]
  const lastSegmentLength = getLength(tailPoint, nextTailPoint)
  const shouldDropTailSegment = lengthToDrop > lastSegmentLength
  if (!shouldDropTailSegment) {
    const direction = getDirection(tailPoint, nextTailPoint)
    const otherPoints = points.slice(1)
    return [movePointAlong(tailPoint, direction, lengthToDrop), ...otherPoints]
  }
  const lengthStillToDrop = lengthToDrop - lastSegmentLength
  const pointsWithLastPointDropped = points.slice(1)
  return updateTailSegment(pointsWithLastPointDropped, lengthStillToDrop)
}

const updateHeadSegment = (
  points: SnakePoint[],
  lengthToAdd: number,
  direction: Direction
): SnakePoint[] => {
  const [previousHeadPoint, headPoint] = points.slice(-2)

  const currentDirection = getDirection(previousHeadPoint, headPoint)
  const userChangedDirectionAddPoint = currentDirection !== direction

  if (userChangedDirectionAddPoint) {
    return [...points, movePointAlong(headPoint, direction, lengthToAdd)]
  }

  const nonHeadPoints = points.slice(0, -1)
  return [...nonHeadPoints, movePointAlong(headPoint, direction, lengthToAdd)]
}

export const updatePoints = (
  state: SnakeState,
  lengthMoved: number
): SnakePoint[] => {
  const { points, direction, lengthToAdd } = state

  const pointsWithHeadUpdated = updateHeadSegment(
    points,
    lengthMoved,
    direction
  )

  if (lengthMoved < lengthToAdd) {
    return pointsWithHeadUpdated
  }

  const pointsWithTailUpdated = updateTailSegment(
    pointsWithHeadUpdated,
    lengthMoved - lengthToAdd
  )

  return pointsWithTailUpdated
}

export const getIsPerpendicular = (
  directionA: Direction,
  directionB: Direction
) => {
  switch (directionA) {
    case Direction.UP:
    case Direction.DOWN:
      return directionB !== Direction.DOWN && directionB !== Direction.UP

    case Direction.LEFT:
    case Direction.RIGHT:
      return directionB !== Direction.LEFT && directionB !== Direction.RIGHT
  }
}

const twoSegmentsCross = (
  segOneFromPoint: SnakePoint,
  segOneToPoint: SnakePoint,
  segTwoFromPoint: SnakePoint,
  segTwoToPoint: SnakePoint
) => {
  const segOneIsVertical = segOneFromPoint[0] === segOneToPoint[0]
  const segTwoIsVertical = segTwoFromPoint[0] === segTwoToPoint[0]

  if (segOneIsVertical === segTwoIsVertical) return false

  if (segOneIsVertical) {
    const crossX =
      (segTwoFromPoint[0] < segOneFromPoint[0] &&
        segTwoToPoint[0] > segOneFromPoint[0]) ||
      (segTwoFromPoint[0] > segOneFromPoint[0] &&
        segTwoToPoint[0] < segOneFromPoint[0])

    const crossY =
      (segOneFromPoint[1] < segTwoFromPoint[1] &&
        segOneToPoint[1] > segTwoFromPoint[1]) ||
      (segOneFromPoint[1] > segTwoFromPoint[1] &&
        segOneToPoint[1] < segTwoFromPoint[1])

    return crossX && crossY
  }

  const crossX =
    (segOneFromPoint[0] < segTwoFromPoint[0] &&
      segOneToPoint[0] > segTwoFromPoint[0]) ||
    (segOneFromPoint[0] > segTwoFromPoint[0] &&
      segOneToPoint[0] < segTwoFromPoint[0])

  const crossY =
    (segTwoFromPoint[1] < segOneFromPoint[1] &&
      segTwoToPoint[1] > segOneFromPoint[1]) ||
    (segTwoFromPoint[1] > segOneFromPoint[1] &&
      segTwoToPoint[1] < segOneFromPoint[1])

  return crossX && crossY
}

export const getHasCollision = (points: SnakePoint[]): boolean => {
  const [previousHeadPoint, headPoint] = points.slice(-2)

  const outOfBounds = headPoint.some(
    dimension => dimension > 100 || dimension < 0
  )

  if (outOfBounds) return true

  const crossedLine = points.reduce((acc, currPoint, ind, arr) => {
    if (acc === true) return acc
    if (ind === arr.length - 1) return false

    const nextPoint = arr[ind + 1]
    return twoSegmentsCross(currPoint, nextPoint, previousHeadPoint, headPoint)
  }, false)

  return crossedLine
}

export const dispatchDirectionChangesOnKeypress = (
  dispatch: Dispatch<SnakeActions>
) => (keydown: KeyboardEvent) => {
  switch (keydown.keyCode) {
    case 37: {
      dispatch(actChangeDirection(Direction.LEFT))
      break
    }
    case 38: {
      dispatch(actChangeDirection(Direction.UP))
      break
    }
    case 39: {
      dispatch(actChangeDirection(Direction.RIGHT))
      break
    }
    case 40: {
      dispatch(actChangeDirection(Direction.DOWN))
      break
    }
  }
}

export const getRandomFoodPoint = (): SnakePoint => {
  return [
    Math.floor(Math.random() * (playFieldSize - 20) + 10),
    Math.floor(Math.random() * (playFieldSize - 20) + 10),
  ]
}
export const getWillEat = (points: SnakePoint[], foodPoint: SnakePoint) => {
  const [headpoint] = points.slice(-1)

  return (
    Math.abs(headpoint[0] - foodPoint[0]) < foodReach &&
    Math.abs(headpoint[1] - foodPoint[1]) < foodReach
  )
}
