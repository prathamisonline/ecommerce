import { useCallback, useState } from "react";
import styles from "./Auth.module.scss";
// import { useAuthContext } from "../../store/authContext";
import { BsCheck } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signUpFormState } from "./store/state";      
import useAuthApi from "./store/hooks";

const RegisterForm = () => {
  const [active, setActive] = useState(false);
  const [signUpForm,setSignUpForm]=useRecoilState(signUpFormState)
  console.log("🚀 ~ RegisterForm ~ signUpForm:", signUpForm)
  const {signUpMutate,signUpLoading}=useAuthApi();

  const handleChange=useCallback((e,name)=>{
   const {value}=e.target;
    setSignUpForm((prev)=>({...prev,[name]:value}))
  },[setSignUpForm])

  const female =
  signUpForm?.gender === "female"
      ? `${styles["button"]} ${styles["active-button"]}`
      : styles["button"];

  const male =
  signUpForm?.gender === "male"
      ? `${styles["button"]} ${styles["active-button"]}`
      : styles["button"];

  const handleSubmit=useCallback(()=>{
    const payload={
      email: signUpForm?.email,
      password: signUpForm?.password,
      name: signUpForm?.name,
      about: signUpForm?.about,
      birth: signUpForm?.birth,
      country:signUpForm?.country,
      gender: signUpForm?.gender
  }
    signUpMutate(payload)
  },[signUpForm?.about, signUpForm?.birth, signUpForm?.country, signUpForm?.email, signUpForm?.gender, signUpForm?.name, signUpForm?.password, signUpMutate])

  return (
    <section className={styles["register-form-main"]}>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <input
            type="text"
            placeholder="Email address"
            value={signUpForm?.email}
            onChange={(e)=>handleChange(e,"email")}
            name="email"
          />
          {/* {validate && email.trim().length === 0 ? (
            <p>Please enter a valid email</p>
          ) : null} */}
        </fieldset>

        <fieldset>
          <input
            type="text"
            placeholder="Password"
            value={signUpForm?.password}
            onChange={(e)=>handleChange(e,"password")}
            name="password"
          />
          {/* {validate && password.trim().length <= 4 ? (
            <p>Please enter password</p>
          ) : null} */}
        </fieldset>

        <fieldset>
          <input
            type="text"
            placeholder="Full Name"
            value={signUpForm?.name}
            onChange={(e)=>handleChange(e,"name")}
            name="name"
          />
          {/* {validate && name.trim().length === 0 ? (
            <p>Please enter a name</p>
          ) : null} */}
        </fieldset>

        <fieldset>
          <input
            type="text"
            placeholder="About"
            value={signUpForm?.about}
            onChange={(e)=>handleChange(e,"about")}
            name="about"
          />
          {/* {validate && about.trim().length === 0 ? (
            <p>Please write about you</p>
          ) : null} */}
        </fieldset>
        <fieldset>
          {active ? (
            <input
              type="date"
              value={signUpForm?.birth}
              onChange={(e)=>handleChange(e,"birth")}
              name="birth"
              id="date"
            />
          ) : (
            <div className={styles["date-main"]}>
              <input
                type="text"
                id="date"
                placeholder="Date of Birth"
                onClick={() => setActive(true)}
              />
              <MdOutlineDateRange className={styles["date"]} />
            </div>
          )}
          {/* {validate && birth.trim().length === 0 ? (
            <p>Please enter a valid date of birth</p>
          ) : null} */}
        </fieldset>

        <fieldset>
          <select
            value={"country"}
            onChange={(e)=>setSignUpForm((prev)=>({...prev,country: e.target.value}))
            }
          >
            <option value="india">India</option>
            <option value="america">America</option>
          </select>
        </fieldset>

        <div className={styles["gender"]}>
          <button
            onClick={(e)=>setSignUpForm((prev)=>({...prev,gender: "male"}))}
            className={male}
          >
            { "male" && <BsCheck size={20} />} Male
          </button>
          <button
            onClick={(e)=>setSignUpForm((prev)=>({...prev,gender: "female"}))
            }
            className={female}
          >
            {"female" && <BsCheck size={20} />} Female
          </button>
        </div>
        {/* {validate && name.trim().length === 0 ? (
          <p style={{ marginTop: "-7px" }}>Please select a preference.</p>
        ) : null} */}

        <button className={styles["submit-form"]} onClick={handleSubmit}>
          {signUpLoading ? "Processing" : "JOIN US"}
        </button>

        <span className={styles["member"]}>
          Already a Member?{" "}
          <Link
            onClick={()=>{}}
            to={"/login"}
          >
            Sign In.
          </Link>{" "}
        </span>
      </form>
    </section>
  );
};

export default RegisterForm;
