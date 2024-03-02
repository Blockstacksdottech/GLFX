import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Checker from "@/components/Checker";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { deleteReq, formatDate2, postReq, req } from "@/helpers/helpers";
import { toast } from "react-toastify";

export default function Inbox() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const limit = 5;
  const [current, setCurrent] = useState(0);
  const [splited, setSplited] = useState([]);

  const fetchTickets = async () => {
    const resp = await req("tickets");
    if (resp) {
      setTickets(resp);
      splitData(resp);
      setLoading(false);
    } else {
      toast.error("Failed Fetching tickets");
    }
  };

  const splitData = (data) => {
    const final = [];
    let temp = [];
    for (const d of data) {
      if (d.hidden_user) {
        continue;
      }

      temp.push(d);
      if (temp.length === limit) {
        final.push(temp);
        temp = [];
      }
    }
    if (temp.length > 0) {
      final.push(temp);
    }
    setSplited(final);
  };

  useEffect(() => {
    fetchTickets().then(() => console.log("fetched tickets"));
  }, []);

  const deleteTicket = async (idd) => {
    const body = {
      ticket: idd,
    };
    const resp = await postReq(`deleteticket`, body);
    if (resp) {
      toast.success("Deleted");
      await fetchTickets();
    } else {
      toast.error("Failed");
    }
  };

  const handleStep = (step) => {
    if (current + step >= splited.length) {
      setCurrent(0);
    } else if (current + step < 0) {
      setCurrent(splited.length - 1);
    } else {
      setCurrent((curr) => curr + step);
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Support | Inbox</title>
      </Head>
      <Checker admin={false}>
        {!loading && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-lg-2 p-0">
                  <Sidebar />
                </div>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <h1 className="h5 float-start">Inbox</h1>
                      <div className="float-end">
                        <a
                          className="btn btn-info"
                          href="/client/support/newmessage/"
                        >
                          New Message
                        </a>
                      </div>
                    </div>
                  </div>
                  {splited.length === 0 && (
                    <>
                      <h1 className="text-center">Inbox Empty</h1>
                    </>
                  )}
                  {splited.length > 0 && splited[current].length > 0 && (
                    <div className="row">
                      <div className="col-md-4 ms-auto">
                        <form action="#">
                          <div className="input-group flex-nowrap">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Mail"
                            />
                            <span className="input-group-text">
                              <i className="bi bi-search"></i>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  <div className="table-responsive my-4">
                    <table className="table table-borderless">
                      <tbody>
                        {splited &&
                          splited[current] &&
                          splited[current].map((e, i) => {
                            return (
                              !e.hidden_user && (
                                <tr key={e.id}>
                                  <td className="action">
                                    <a onClick={() => deleteTicket(e.id)}>
                                      <i className="bi bi-trash text-danger"></i>
                                    </a>
                                  </td>
                                  <td className="subject">
                                    <a
                                      href={`/client/support/detailed?ticket=${e.id}`}
                                      className="text-dark"
                                    >
                                      {e.subject}
                                    </a>
                                  </td>
                                  <td className="time float-end">
                                    {formatDate2(e.date)}
                                  </td>
                                </tr>
                              )
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  {splited.length > 0 && splited[current].length > 0 && (
                    <div className="clearfix">
                      <div className="float-end">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                onClick={() => handleStep(-1)}
                              >
                                Previous
                              </a>
                            </li>
                            {splited.map((e, i) => {
                              return (
                                <li className="page-item" key={`pag-${i}`}>
                                  <a
                                    className="page-link"
                                    onClick={() => setCurrent(i)}
                                  >
                                    {i + 1}
                                  </a>
                                </li>
                              );
                            })}
                            <li className="page-item">
                              <a
                                className="page-link"
                                onClick={() => handleStep(1)}
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </main>
              </div>
            </div>
          </>
        )}
      </Checker>
    </>
  );
}
