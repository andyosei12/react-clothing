import SignIn from "../../components/sign-in/Sign-in";
import Signup from "../../components/sign-up/Signup";
import "./Signin.styles.scss";

const Signin = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Signin;
