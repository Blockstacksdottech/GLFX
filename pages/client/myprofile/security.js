import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { postReq } from "@/helpers/helpers";
import { toast } from "react-toastify";

export default function Security() {
  const [User, setUser] = useContext(UserContext);

  const [body, setBody] = useState({
    old_pass: "",
    new_pass: "",
    confirm_pass: "",
  });

  const updatePassword = async () => {
    const resp = await postReq("security", body);
    if (!resp.failed) {
      toast.success("Password updated successfully");
    } else {
      if (resp.message) {
        toast.error(resp.message);
      } else {
        toast.error("Failed updating password");
      }
    }
  };

  const handleChange = (e) => {
    let temp = { ...body };
    temp[e.target.name] = e.target.value;
    setBody(temp);
  };

  return (
    <>
      <Head>
        <title>GLFX - My Profile | Change Portal Password</title>
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <div className="clearfix">
                <h1 className="h5 text-center">Change Portal Password</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card mb-5">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="mb-2">Current Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your current password"
                          name="old_pass"
                          value={body.old_pass}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your new password"
                          name="new_pass"
                          value={body.new_pass}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Please confirm your new password"
                          name="confirm_pass"
                          value={body.confirm_pass}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="clearfix">
                        <a
                          className="btn btn-primary float-end"
                          onClick={updatePassword}
                        >
                          Update
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
