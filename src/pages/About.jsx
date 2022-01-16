import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback for a product or services</p>
        <p>Version: 1.0.0</p>
      </div>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default About;
