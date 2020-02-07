import React, { useEffect, FunctionComponent } from "react"
import { navigate } from "gatsby"

const IndexPage: FunctionComponent<{}> = () => {
  useEffect(() => {
    navigate("/cv")
  })
  return <></>
}

export default IndexPage
