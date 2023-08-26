import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { signUpUser } from "../api/api";
import { UserContext } from "../context/userContext";

const Signup = () => {
  const { setUser }: any = useContext(UserContext);
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState<string>("");
  const [signUpData, setSignUpData] = useState({});

  const navigate = useNavigate();

  const updateSignUpData = (e: any) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(true);
    const signUpResponse: any = await signUpUser(signUpData);
    if (signUpResponse.response) {
      setIsloading(false);
      const { data } = signUpResponse.response;
      if (data.message) {
        setError(data.message);
      } else if (data.errors) {
        const dataErrors = Object.keys(data.errors);
        dataErrors.forEach(() => {
          setError("error2");
        });
      }
      return;
    }

    const { data } = signUpResponse;
    localStorage.setItem("userToken", JSON.stringify(data));
    setUser(data);
    if (data.status === "success") {
      navigate(`/login`);
    } else {
      navigate("/");
    }
  };

  const renderError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
    return <p style={{ color: "red" }}>{error}</p>;
  };

  return (
    <div>
      <div>
        <div className="form-group1">
          <label>Username</label>
          <input
            onChange={updateSignUpData}
            type="text"
            placeholder="Enter your username"
            name="username"
          />
        </div>
        <div className="form-group1">
          <label>Password</label>
          <input
            onChange={updateSignUpData}
            type="text"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button onClick={handleSubmit}>
          {loading ? <PulseLoader color="#fff" /> : "Sign up"}
        </button>
      </div>
      <div className="error">{error && renderError()}</div>
      <div className="para">
        <p>
          Already have an account,{" "}
          <Link to="/login" className="link">
            log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
