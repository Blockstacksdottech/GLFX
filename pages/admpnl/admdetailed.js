import Head from "next/head";

import Checker from "@/components/Checker";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { formatDate, formatDate2, postReq, req } from "@/helpers/helpers";
import Navbar from "./component/navbar";

export default function Detailed() {
  const [ticket, setTicket] = useState();
  const [loading, setLoading] = useState();
  const params = useSearchParams();
  const [message, setMessage] = useState();

  const fetchTicket = async () => {
    const tid = params.get("ticket");
    if (tid) {
      const resp = await req(`admin/admtickets/${tid}`);
      if (resp) {
        setTicket(resp);
        setLoading(false);
      } else {
        toast.error("Failed fetching ticket");
      }
    }
  };

  useEffect(() => {
    fetchTicket().then(() => console.log("fetching ticket"));
  }, [params]);

  const reply = async () => {
    const resp = await postReq("reply", { ticket: ticket.id, message });
    if (resp) {
      await fetchTicket();
    } else {
      toast.error("Failed replying");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Support | Message Details</title>
      </Head>
      <Checker admin={true}>
        {!loading && ticket && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <div className="h5 float-start">
                        <a href="/admpnl/support" className="text-dark">
                          <i className="bi bi-arrow-left-circle"></i> Back to
                          Inbox
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card shadow-none mt-3 border border-light">
                    <div className="card-body">
                      <div className="media mb-3">
                        <div className="media-body">
                          <span className="media-meta float-end">
                            {formatDate2(new Date(ticket.date))}
                          </span>

                          <small className="text-muted">
                            From : {ticket.user.email}
                          </small>
                          <h5 className="my-3 text-primary m-0">
                            {ticket.subject}
                          </h5>
                        </div>
                      </div>

                      <div className="chat-body">
                        {ticket.messages.map((e, i) => {
                          if (!e.from_admin) {
                            return (
                              <p
                                key={`message-${e.id}`}
                                className="small px-2 py-1 text-dark text-wrap text-start my-2"
                              >
                                <span className="h6">
                                  {ticket.user.username} ({ticket.user.email}){" "}
                                  <br />
                                </span>
                                {e.message}
                              </p>
                            );
                          } else {
                            return (
                              <p className="small px-2 py-1 text-secondary text-wrap text-end my-2">
                                <span className="h6">
                                  Admin <br />
                                </span>
                                {e.message}
                              </p>
                            );
                          }
                        })}
                      </div>
                      <hr />
                      <div className="media mt-3">
                        <div className="media-body">
                          <textarea
                            className="form-control"
                            rows="9"
                            placeholder="Reply here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="clearfix mt-3">
                        <div className="float-end">
                          <a className="btn btn-primary" onClick={reply}>
                            <i className="bi bi-send mr-1"></i> Send
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </>
        )}
      </Checker>
    </>
  );
}
