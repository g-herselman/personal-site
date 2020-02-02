export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export enum GameplayState {
  MENU,
  PLAYING,
  PAUSED,
  GAME_OVER,
}

export type SnakePoint = [number, number]
