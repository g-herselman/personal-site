import React, { FunctionComponent, useState } from "react"
import styles from "./CvContents.module.scss"

export const CvContents: FunctionComponent<{}> = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const hasSection = (section: string) => expandedSections.includes(section)
  const toggleSection = (section: string) => {
    if (hasSection(section)) {
      setExpandedSections(
        expandedSections.filter(expandedSection => expandedSection !== section)
      )
    } else {
      setExpandedSections([...expandedSections, section])
    }
  }

  return (
    <>
      <h1>Experience</h1>
      <h3>
        NML (2018 - Current)
        <br />
        Developer
      </h3>
      <h4>Projects and Responsibilities</h4>
      <h5>Front-end</h5>
      <p>
        Contributor and, currently, primary maintainer of front-end code for a
        complex progressive web app developed for a finacial services provider.
        Key challenges faced during the development process include:
      </p>
      <ul>
        <li>Ensuring the PWA behaves as close to a native app as possible.</li>
        <li>
          Ensuring the vast majority of application functionality works without
          connectivity, with the PWA syncing data to and from a backend when
          connectivity is available.
        </li>
        <li>
          Interpreting product specifications to implement a real-time quoting
          system for life insurance and funeral cover. These quotes are provided
          after a guided financial needs assessment process.
        </li>
        <li>
          Implementing more than 50 validation rules, including some bank
          account number verification, to ensure the process of applying for
          products can be fully integrated with APIs provided by partners.
        </li>
      </ul>
      <p>Key technologies: React, Redux, Redux-Observable, RxJS, Jest</p>
      <h5>Back-end</h5>
      <p>
        Contributor to back-end code using the repository pattern and Azure
        Functions. This includes writing repositories and their underlying SQL
        queries, as well as Azure functions, invoked via Azure LogicApps, which
        serve data to the front-end.
      </p>
      <p>Key technologies: C#, .Net, Entity Framework, Azure SQL Database</p>
      <h3 onClick={() => toggleSection("sysadmin")}>
        Bosch Management Services (2009 - 2018){" "}
        {hasSection("sysadmin") ? "▼" : "►"}{" "}
        {hasSection("sysadmin") && (
          <>
            <br />
            IT Department Assistant to Senior Systems Administrator
          </>
        )}
      </h3>
      {hasSection("sysadmin") && (
        <>
          <h4>Responsibilities</h4>
          <ul>
            <li>Company WAN design on a multi-national scale</li>
            <li>
              Maintaining and implementing internal certificate authorities.
            </li>
            <li>
              Configuration and maintenance of Microsoft Windows Server
              2000-2016 servers, including roles such as Active Directory Domain
              Services (with Federated Services), Reverse Application Proxy,
              Network Policy Server and Distributed File Systems, Failover
              Cluster Services and Hyper-V.
            </li>
            <li>
              Configuration of multiple types of network equipment, including
              hardware firewalls, routers, switches, wireless access points with
              central management systems and video conferencing equipment.
            </li>
          </ul>
          <h4>Selected Projects</h4>
          <h5>Water Treatment Network Equipment Replacement (2017)</h5>
          <p>
            Acted as technical consultant and engineer on the replacement of
            network equipment for water treatment and pipeline infrastructure.
            The project included the configuration and installation of equipment
            encompassing 400 kilometers of pipeline for Botswana’s Water
            Utilities Corporation.
          </p>
          <h5>Nakambala project site (2015)</h5>
          <p>
            Acted as IT project manager for the design and installation of an
            onsite temporary network for use by staff involved in the upgrade of
            a sugar mill. Responsibilities included requirement elicitation from
            the parent project manager, procurement, network design, liaising
            with IT services on the client side, and documentation.
          </p>
          <h5>Replacement of print-tracking software (2015)</h5>
          <p>
            Acted as project manager for the replacement of print tracking and
            billing software nationwide. This included the processes of
            requirement elicitation from stakeholders, the evaluation of
            suitable off-the-shelf software packages, procurement, the
            development of documentation and training material and leading the
            technical team through the deployment process.
          </p>
        </>
      )}
      <div className={styles.education}>
        <h1>Education</h1>

        <h3 className={styles.nobottom}>2017</h3>
        <h4 className={styles.notop}>
          Bachelor of Science in Computing, <i>cum laude</i> <br /> UNISA{" "}
        </h4>
        <h3 className={styles.nobottom}>2013</h3>
        <h4 className={styles.notop}>
          Microsoft Certified Solutions Associate, Windows Server 2008
        </h4>
      </div>
    </>
  )
}
