import React, { FunctionComponent } from "react"
import { SitePage } from "../components/SitePage"
import { LinksAndContacts } from "../components/Copy/LinksAndContacts"

export const ContactPage: FunctionComponent<{}> = () => {
  return (
    <SitePage>
      <LinksAndContacts />
    </SitePage>
  )
}

export default ContactPage
