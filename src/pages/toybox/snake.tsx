import React, { FunctionComponent } from "react"
import { SitePage } from "../../components/SitePage"
import { SnakeGame } from "../../components/Snake"

export const ToyBoxpage: FunctionComponent<{}> = () => {
  return (
    <SitePage>
      <SnakeGame />
    </SitePage>
  )
}

export default ToyBoxpage
