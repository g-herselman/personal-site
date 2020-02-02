import React, { FunctionComponent } from "react"
import { SitePage } from "../components/SitePage"
import { CvContents } from "../components/CvContents"
import { AboutMe } from "../components/AboutMe"

export const CvPage: FunctionComponent<{}> = () => {
  return (
    <SitePage>
      <AboutMe />
      <CvContents />
    </SitePage>
  )
}

export default CvPage
