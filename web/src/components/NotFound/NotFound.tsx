import { Link } from "gatsby";
import React from "react";


const headingStyles = {
  marginTop: 24,
  marginBottom: 24,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFound = () => {
    return <div>
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