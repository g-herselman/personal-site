import React, { FunctionComponent, useEffect } from "react"
import { navigate } from "gatsby"
import { SitePage } from "../../components/Layout/SitePage"
import { ToyboxLinks } from "../../components/Atoms/ToyboxLinks"

export const ToyBoxPage: FunctionComponent<{}> = () => {
  useEffect(() => {
    navigate("/toybox/snake")
  })

  return (
    <>
      <SitePage sublinks={<ToyboxLinks />} />
    </>
  )
}

export default ToyBoxPage
