import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Task Manager App</h1>
      <p>
        Proceed to{" "}
        <Link to="/signup" className="link">
          register
        </Link>
      </p>
      <p>
        Already have an account,{" "}
        <Link to="/login" className="link">
          log in
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;
