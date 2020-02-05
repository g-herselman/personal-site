import React, { FunctionComponent } from "react"
import { SitePage } from "../../components/Layout/SitePage"
import { SnakeGame } from "../../components/Toys/SnakeGame"
import { ToyboxLinks } from "../../components/Atoms/ToyboxLinks"
import { SnakeCopy } from "../../components/Copy/AboutSnake"
import { ToyboxGrid } from "../../components/Layout/ToyboxGrid"

export const Snake: FunctionComponent<{}> = () => {
  return (
    <SitePage sublinks={<ToyboxLinks />}>
      <ToyboxGrid>
        <SnakeGame />
        <SnakeCopy />
      </ToyboxGrid>
    </SitePage>
  )
}

export default Snake
