import React, { FunctionComponent } from "react"
import { SitePage } from "../../components/SitePage"
import { SnakeGame } from "../../components/Toys/SnakeGame"
import { ToyboxLinks } from "../../components/Atoms/ToyboxLinks"

export const Snake: FunctionComponent<{}> = () => {
  return (
    <SitePage sublinks={<ToyboxLinks />}>
      <SnakeGame />
    </SitePage>
  )
}

export default Snake
