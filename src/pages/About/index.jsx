import { useLocation } from "react-router-dom";

import { useChangeStateNav } from "~/hooks";

function About() {
  const location = useLocation();
  useChangeStateNav(location);
  return <h2>about page</h2>;
}

export default About;
