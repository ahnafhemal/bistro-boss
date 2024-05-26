import loginBg from "../../assets/others/authentication2.png";
import bgImage from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const handleValidateCaptcha = () => {
    const user_captcha_Value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_Value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="flex items-center justify-center min-h-screen"
    >
      <img src={loginBg} alt="" />
      <div className="md:w-1/2 w-full max-w-sm ">
        <form onSubmit={handleLogin} className="">
          <h3 className="text-center font-semibold text-xl lg:text-3xl">
            Login
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  font-semibold text-base">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>

            <input
              type="text"
              ref={captchaRef}
              placeholder="type the captcha above"
              name="captcha"
              className="input input-bordered"
              required
            />
            <Link
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-xs mt-5"
            >
              Validate
            </Link>
          </div>

          <div className="form-control mt-6">
            <Link
              disabled={disabled}
              className="btn bg-[#f8b365a1]  font-bold text-base"
            >
              Login
            </Link>
          </div>
        </form>
        <p className="text-[#c39d2cdf]">New here, <Link to='/register' className="font-bold">Create a New Accounts</Link></p>
      </div>
    
    </div>
  );
};

export default Login;
