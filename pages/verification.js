import Checker from "@/components/Checker";
import { postReq } from "@/helpers/helpers";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Verification() {
  const [sent, useSent] = useState(false);
  const otpRef = useRef("null");

  const sendOTP = async () => {
    const res = await postReq("sendotp");
    if (res) {
      toast.success("Check your email");
    } else {
      toast.error("Failed Sending Code");
    }
  };

  const router = useRouter();

  const verifyOTP = async (e) => {
    e.preventDefault();
    const body = {
      code: otpRef.current.value,
    };
    const res = await postReq("confirmotp", body);
    if (res) {
      toast.success("Verified");
      router.push("/client/myprofile/personaldetails");
    } else {
      toast.error("Failed Verifying the OTP");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Email and Phone Verification</title>
      </Head>
      <Checker admin={false} verification={true}>
        <main className="d-flex align-items-center my-5 justify-content-center">
          <form
            method="post"
            action="/client/myprofile/documentation/"
            autoComplete="off"
            autoFocus="off"
            className="form-signin w-100 m-auto"
          >
            <div className="text-center mb-3">
              <img className="mb-4" src="../assets/brand/logo.png" alt="GLFX" />
              <h3>Email Verification</h3>
            </div>

            <div className="card my-3">
              <div className="card-header">Email Address</div>
              <div className="card-body">
                {/* <div className="mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value="email@email.com"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Send OTP
                    </button>
                  </div>
                </div> */}
                <div className="mb-3">
                  <label>OTP</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your OTP"
                      ref={otpRef}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={sendOTP}
                    >
                      Send OTP
                    </button>
                  </div>
                  {/* <div className="form-text mt-2 text-center">
                    {sent && <>If OTP is not received,</>}
                    {sent && <>Request OTP,</>}
                    <a href="#" className="strong" onClick={sendOTP}>
                      {sent && <>Resend OTP</>}
                      {!sent && <>Send OTP</>}
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-100 py-2" onClick={verifyOTP}>
              Verify OTP
            </button>

            <p className="mt-5 mb-3 text-body-secondary">
              &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
            </p>
          </form>
        </main>
      </Checker>
    </>
  );
}

{
  /* <div className="card my-3">
            <div className="card-header">Phone Number</div>
            <div className="card-body">
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">+234</span>
                  <input
                    type="text"
                    className="form-control"
                    value="1234567890"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label>OTP</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your OTP"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Verify OTP
                  </button>
                </div>
                <div className="form-text mt-2 text-center">
                  If OTP is not received,{" "}
                  <a href="" className="strong">
                    Resend OTP
                  </a>
                </div>
              </div>
            </div>
          </div> */
}
