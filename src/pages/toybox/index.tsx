import React, { FunctionComponent } from "react"
import { SitePage, CascadeLink } from "../../components/SitePage"

export const ToyBoxPage: FunctionComponent<{}> = () => {
  return (
    <SitePage sublinks={<CascadeLink to="/toybox/snake">Snake</CascadeLink>} />
  )
}

export default ToyBoxPage
