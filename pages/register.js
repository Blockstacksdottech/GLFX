"use client";
import Checker from "@/components/Checker";
import { UserContext } from "@/contexts/UserContext";
import { isLogged, registerCall } from "@/helpers/helpers";
import { RegsiterValidator } from "@/helpers/validators";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

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
      obj.emailVerified = resp.email_verified;
      setUser(obj);
    }
  }

  useEffect(() => {
    if (User.logged) {
      router.push(User.path);
    } else {
      checkUser().then(() => {
        console.log("done check");
        setLoading(false);
      });
    }
  }, [User]);

  const registerMethod = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let company_name = document.getElementById("company_name").value;

    if (!checked) {
      toast.warning("Please Agree to terms");
    } else if (confirm !== password) {
      toast.warning("Password missmatch");
    } else {
      let data = {
        username,
        email,
        password,
        name,
        surname,
        phone,
        company_name,
      };

      const parsed = RegsiterValidator.safeParse(data);
      if (parsed.success) {
        let resp = await registerCall(data);
        if (resp) {
          if (resp.failed) {
            for (let err of resp.result) {
              toast.error("failed registeration : " + err);
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
            obj.emailVerified = resp.email_verified;
            setUser(obj);
            toast.success("Registered");
          }
        } else {
          console.log(resp);
          toast.error("failed register");
        }
      } else {
        for (const err of parsed.error.issues) {
          toast.error(`${err.path[0]} : ${err.message}`);
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Register</title>
      </Head>
      {!loading && (
        <main className="d-flex align-items-center my-5 justify-content-center">
          <form
            method="post"
            action="/client/myaccount/liveaccount"
            autoComplete="off"
            autoFocus="off"
            className="form-signin w-100 m-auto"
          >
            <div className="text-center">
              <img className="mb-4" src="../assets/brand/logo.png" alt="GLFX" />
              <h1 className="mb-3">Register</h1>
            </div>

            <p className="mb-2">
              <small>
                Do not have an account? Create your account, it takes less than
                a minute.
              </small>
            </p>

            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                id="name"
              />
              <label>First Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="surname"
              />
              <label>Last Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                id="username"
              />
              <label>Username</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                id="company_name"
              />
              <label>Company Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                id="email"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                id="phone"
              />
              <label>Phone</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
              />
              <label>Password</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                id="confirm"
              />
              <label>Confirm Password</label>
            </div>

            <div class="form-check text-start mb-3 mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Agree to <a href="">Terms & Conditions</a> |{" "}
                <a href="">Privacy Statement</a>
              </label>
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              onClick={registerMethod}
            >
              Register
            </button>
            <div className="text-start mt-3">
              <p className="mt-1">
                <a href="/login" className="awu">
                  Alreday have an account? Login
                </a>
              </p>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">
              &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
            </p>
          </form>
        </main>
      )}
    </>
  );
}
