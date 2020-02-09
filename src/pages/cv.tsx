import React, { FunctionComponent } from "react"
import { SitePage } from "../components/Layout/SitePage"
import { Cv } from "../components/Copy/Cv"
import { AboutMe } from "../components/Copy/AboutMe"
import { Education } from "../components/Copy/Education"

export const CvPage: FunctionComponent<{}> = () => {
  return (
    <SitePage>
      <AboutMe />
      <Cv />
      <Education />
    </SitePage>
  )
}

export default CvPage
