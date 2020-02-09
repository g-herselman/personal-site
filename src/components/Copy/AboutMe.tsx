import React, { FunctionComponent } from "react"

export const AboutMe: FunctionComponent<{}> = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I've worked with computer code and infrastructure professionally for
        more than a decade.
      </p>
      <p>
        In that time I have:
        <ul>
          <li>Installed servers at sugar factories in Zambia.</li>
          <li>
            Shut down equipment in corrosive smoke while wearing an oxygen mask.
          </li>
          <li>
            Talked someone who didn't know what the 'Start Button' was through
            editing the Windows registry.
          </li>
          <li>
            Demoed new features from local dev to a boardroom full of clients.
          </li>
        </ul>
      </p>
      <p>
        I'm passionate about technology and how it can be used to make people's
        lives better.
      </p>
    </section>
  )
}
