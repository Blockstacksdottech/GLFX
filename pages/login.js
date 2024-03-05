import Checker from "@/components/Checker";
import { UserContext } from "@/contexts/UserContext";
import { get_token, isLogged, logout } from "@/helpers/helpers";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  async function checkUser() {
    let resp = await isLogged();
    if (resp) {
      let obj = { ...User };
      obj.logged = true;
      obj.id = resp.id;
      obj.username = resp.username;
      obj.joined = resp.joined;
      obj.isA = resp.s;
      obj.path = resp.path;
      obj.email = resp.email;
      obj.name = resp.name;
      obj.surname = resp.surname;
      obj.company_name = resp.company_name;
      obj.phone = resp.phone;
      obj.isBaned = resp.is_baned;
      obj.isVerified = resp.is_verified;
      if (resp.is_baned) {
        logout(setUser);
      } else {
        setUser(obj);
      }
    }
  }

  useEffect(() => {
    if (User.logged) {
      console.log(User);
      router.push(User.path);
    } else {
      checkUser().then(() => {
        console.log("done check");
        setLoading(false);
      });
    }
  }, [User]);

  const loginMethod = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let resp = await get_token(username, password, true);
    console.log("resp here");
    console.log(resp);
    if (resp) {
      if (resp.status == false) {
        console.log("login failed");
        console.log(resp);
        for (let key of Object.keys(resp.result)) {
          if (key == "detail") {
            toast.error("Login failed : " + resp.result[key]);
          } else {
            toast.error("Login failed : " + key + " : " + resp.result[key][0]);
          }
        }
      } else {
        let obj = { ...User };
        obj.logged = true;
        obj.id = resp.id;
        obj.username = resp.username;
        obj.joined = resp.joined;
        obj.isA = resp.s;
        obj.path = resp.path;
        obj.email = resp.email;
        obj.name = resp.name;
        obj.surname = resp.surname;
        obj.company_name = resp.company_name;
        obj.phone = resp.phone;
        obj.isBaned = resp.is_baned;
        obj.isVerified = resp.is_verified;
        if (resp.is_baned) {
          toast.error("You are banned");
        } else {
          setUser(obj);
        }

        /* if (resp.enable_login) {
          setUser(obj);
          toast.success("Logged in");
        } else {
          toast.error("User Login Disabled");
        } */
      }
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Login</title>
      </Head>

      {!loading && (
        <>
          <main className="d-flex align-items-center my-5 justify-content-center">
            <form
              method="post"
              action="/client/myaccount/liveaccount"
              autoComplete="off"
              autoFocus="off"
              className="form-signin w-100 m-auto"
            >
              <div className="text-center">
                <img
                  className="mb-4"
                  src="../assets/brand/logo.png"
                  alt="GLFX"
                />
                <h1 className="mb-3">Login</h1>
              </div>

              <p className="mb-2">
                <small>
                  Enter your email address and password to access account.
                </small>
              </p>

              <div className="text-center">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Email or Username"
                  />
                  <label>Email address or Username</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <label>Password</label>
                </div>
                <button
                  className="btn btn-primary w-100 py-2"
                  type="submit"
                  onClick={loginMethod}
                >
                  Login
                </button>
                <div className="text-start mt-3">
                  <p>
                    <a href="/forgotpassword" className="awu">
                      Forgot Password?
                    </a>
                  </p>
                  <p className="mt-1">
                    <a href="/register" className="awu">
                      Don't have an account? Register yourself
                    </a>
                  </p>
                </div>
              </div>

              <p className="mt-5 mb-3 text-body-secondary">
                &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
              </p>
            </form>
          </main>
        </>
      )}
    </>
  );
}
