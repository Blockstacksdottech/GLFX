import Checker from "@/components/Checker";
import { UserContext } from "@/contexts/UserContext";
import { isLogged, postReq } from "@/helpers/helpers";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Forgotpassword() {
  const params = useSearchParams();
  const [recovery, setRecovery] = useState(false); // false => asking for recovery
  const [recoveryId, setRecoveryId] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    console.log(params.get("reqid"));
    const req_id = params.get("reqid");
    if (req_id) {
      setRecovery(true);
      setRecoveryId(req_id);
    }
  }, [params]);

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
      if (resp.is_baned) {
        logout(setUser);
      } else {
        setUser(obj);
      }
    }
  }

  const askRecover = async (e) => {
    e.preventDefault();
    const body = {
      email: emailRef.current.value,
    };
    const res = await postReq("recover", body);
    if (res) {
      toast.success("Check your email");
    }
  };

  const validateRecover = async (e) => {
    e.preventDefault();
    if (recoveryId) {
      const body = {
        req_id: recoveryId,
        new_pass: passwordRef.current.value,
        confirm_pass: confirmRef.current.value,
      };
      const res = await postReq("recoverupdate", body);
      if (res) {
        toast.success("Updated");
        router.push("/login");
      } else {
        toast.error("Failed");
      }
    } else {
      toast.error("Request ID invalid");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Forgotpassword</title>
      </Head>
      {!loading && (
        <>
          <main className="d-flex align-items-center my-5 justify-content-center">
            <form className="form-signin w-100 m-auto">
              <div className="text-center">
                <img
                  className="mb-4"
                  src="../assets/brand/logo.png"
                  alt="GLFX"
                />
                <h1 className="mb-3">
                  {!recovery && <>Forgot Password</>}
                  {recovery && <>Update Password</>}
                </h1>
              </div>
              {!recovery && (
                <>
                  <p className="mb-2">
                    <small>
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </small>
                  </p>

                  <div className="text-center">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        ref={emailRef}
                      />
                      <label>Email address</label>
                    </div>
                    <button
                      className="btn btn-primary w-100 py-2"
                      type="submit"
                      onClick={askRecover}
                    >
                      Reset Password
                    </button>
                    <div className="text-center mt-3">
                      <p>
                        <a href="/login" className="awu">
                          Back to Login
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}

              {recovery && (
                <>
                  <p className="mb-2">
                    <small>
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </small>
                  </p>

                  <div className="text-center">
                    <div className="form-floating">
                      <div className="mb-3">
                        <label className="mb-2">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your new password"
                          name="new_pass"
                          ref={passwordRef}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Please confirm your new password"
                          name="confirm_pass"
                          ref={confirmRef}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary w-100 py-2"
                      type="submit"
                      onClick={validateRecover}
                    >
                      Reset Password
                    </button>
                    <div className="text-center mt-3">
                      <p>
                        <a href="/login" className="awu">
                          Back to Login
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              )}

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
