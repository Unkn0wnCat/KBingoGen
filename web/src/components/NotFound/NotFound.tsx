import { Link } from "gatsby";
import React from "react";


// styles
const pageStyles = {
    padding: "96px 0"
  }

const headingStyles = {
  marginTop: 0,
  marginBottom: 24,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFound = () => {
    return <div style={pageStyles}>
    <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </div>
}

export default NotFound;