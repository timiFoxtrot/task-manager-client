import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { loginUser } from "../api/api";

const Login = () => {
  const { setUser }: any = useContext(UserContext);

  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [loading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const updateLoginData = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsloading(true);
    const loginResponse: any = await loginUser(loginData);
    // eslint-disable-next-line
    if (loginResponse.response) {
      setIsloading(false);
      const { data } = loginResponse.response;
      if (data.message) {
        setError(data.message);
      }
      return;
    }

    const { data } = loginResponse;
    localStorage.setItem("userToken", JSON.stringify(data));
    setUser(data);
    if (data.status === "success") {
      navigate("/home");
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
            onChange={updateLoginData}
            type="text"
            placeholder="Enter your username"
            name="username"
          />
        </div>
        <div className="form-group1">
          <label>Password</label>
          <input
            onChange={updateLoginData}
            type="text"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <button onClick={handleSubmit}>
          {loading ? <PulseLoader color="#fff" /> : "Login"}
        </button>
      </div>
      <div className="error">{error && renderError()}</div>
    </div>
  );
};

export default Login;
