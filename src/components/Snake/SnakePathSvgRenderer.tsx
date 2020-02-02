import React, { FunctionComponent } from "react"
import { SnakePoint } from "./types"
import { playFieldSize } from "./constants"

export const SnakePathSvgRenderer: FunctionComponent<{
  points: SnakePoint[]
  foodPoint: SnakePoint
}> = ({ points, foodPoint }) => {
  const shadow = 0.3
  const width = 1.5

  const mainPathDrawString = points.reduce((acc, curr, ind) => {
    if (ind === 0) {
      return `M ${curr[0]},${curr[1]}`
    }
    return `${acc} L ${curr[0]},${curr[1]}`
  }, "")

  const shadowPathDrawString = points.reduce((acc, curr, ind) => {
    if (ind === 0) {
      return `M ${curr[0] - shadow},${curr[1] + shadow}`
    }
    return `${acc} L ${curr[0] - shadow},${curr[1] + shadow}`
  }, "")

  return (
    <>
      <svg viewBox={`0 0 ${playFieldSize} ${playFieldSize}`}>
        <rect
          width={playFieldSize}
          height={playFieldSize}
          style={{ stroke: "rgb(0, 80, 136)", strokeWidth: width }}
          fill="none"
        />
        <path
          d={mainPathDrawString}
          style={{
            fill: "none",
            stroke: "rgb(0, 80, 136)",
            opacity: 0.2,
            strokeWidth: width,
            strokeLinecap: "round",
          }}
        />
        <path
          d={shadowPathDrawString}
          style={{
            fill: "none",
            stroke: "rgb(0, 80, 136)",
            strokeWidth: width,
            strokeLinecap: "round",
          }}
        />
        <circle
          cx={foodPoint[0]}
          cy={foodPoint[1]}
          r={width}
          style={{
            fill: "rgb(0, 80, 136)",
          }}
        />
      </svg>
    </>
  )
}
