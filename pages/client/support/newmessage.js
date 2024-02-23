import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useState } from "react";
import { postReq } from "@/helpers/helpers";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Checker from "@/components/Checker";

export default function Newmessage() {
  const [body, setBody] = useState({
    subject: "",
    message: "",
  });
  const router = useRouter();

  const handleFields = (e) => {
    let temp = { ...body };
    temp[e.target.name] = e.target.value;
    setBody(temp);
  };

  const submit = async () => {
    const resp = await postReq("newmessage", body);
    if (resp) {
      toast.success("newmessage", body);
      router.push("/client/support/inbox");
    } else {
      toast.error("Failed Sending Message");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Support | New Message</title>
      </Head>
      <Checker admin={false}>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2 p-0">
              <Sidebar />
            </div>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
              <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="clearfix">
                  <h1 className="h5 float-start">New Message</h1>
                </div>
              </div>

              <div className="card shadow-none mt-3 border border-light">
                <div className="card-body">
                  <div className="media mt-3">
                    <div className="media-body">
                      <input
                        className="form-control mb-2"
                        placeholder="Subject"
                        name="subject"
                        value={body.subject}
                        onChange={handleFields}
                      />
                      <textarea
                        className="form-control"
                        rows="9"
                        placeholder="Reply here..."
                        name="message"
                        value={body.message}
                        onChange={handleFields}
                      ></textarea>
                    </div>
                  </div>
                  <div className="clearfix mt-3">
                    <div className="float-end">
                      <a className="btn btn-primary" onClick={submit}>
                        <i className="bi bi-send mr-1"></i> Send
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Checker>
    </>
  );
}
