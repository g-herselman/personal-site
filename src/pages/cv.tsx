import React, { FunctionComponent } from "react"
import { SitePage } from "../components/SitePage"
import { Cv } from "../components/Copy/Cv"
import { AboutMe } from "../components/Copy/AboutMe"

export const CvPage: FunctionComponent<{}> = () => {
  return (
    <SitePage>
      <AboutMe />
      <Cv />
    </SitePage>
  )
}

export default CvPage
