import { useRecoilState } from "recoil";
import styles from "./Auth.module.scss";
import AuthHead from "./AuthHead";
import { Link } from "react-router-dom";
import { loginFormState } from "./store/state";
import { useCallback } from "react";
import useAuthApi from "./store/hooks";

const Login = () => {
  const [loginForm,setLoginForm]=useRecoilState(loginFormState)
  const {loginMutate,loginLoading}=useAuthApi();

    const handleChange=useCallback((e,name)=>{
      const {value}=e.target
      setLoginForm((prev)=>({...prev,[name]:value}))
    },[setLoginForm])

    const handleSignIn = useCallback(() => {
      const payload={
        email:loginForm?.email,
        password:loginForm?.password
      }
      loginMutate(payload)
    }, [loginForm?.email, loginForm?.password, loginMutate]);

   
  return (
    <main className={styles["register"]}>
      <div className={styles["register-wrap"]}>
        <AuthHead title="YOUR ACCOUNT FOR EVERYTHING NIKE" />

        <section className={styles["register-form-main"]}>
          {/* <form onSubmit={handleSignIn}> */}
            <fieldset>
              <input
                type="text"
                placeholder="Email address"
                value={loginForm.email}
                name="email"
                onChange={(e)=>{handleChange(e,"email")}}
              />
              {/* {validate && email.trim().length <= 0 ? (
                <p>Please enter your email</p>
              ) : null} */}
            </fieldset>

            <fieldset>
              <input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                name="password"
                onChange={(e)=>{handleChange(e,"password")}}
              />
              {/* {validate && password.trim().length <= 0 ? (
                <p>Please enter password</p>
              ) : null} */}
            </fieldset>

            <button className={styles["submit-form"]} onClick={handleSignIn}>
              {loginLoading ? "Processing" : "SIGN IN"}
            </button>

            <span className={styles["member"]}>
              Not a Member?{" "}
              <Link
                to={"/register"}
                onClick={() => {
                //   setRegisterData(stateInitialValue);
                //   setValidate(false);
                }}
              >
                Join Us.
              </Link>{" "}
            </span>
          {/* </form> */}
        </section>
      </div>
    </main>
  );
};

export default Login;
