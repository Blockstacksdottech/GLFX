import Head from "next/head";
import Navbar from "./component/navbar";
import Checker from "@/components/Checker";
import { useRouter } from "next/router";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { req } from "@/helpers/helpers";
import { toast } from "react-toastify";

export default function Accounts() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();

  const fetchUser = async (id) => {
    const resp = await req(`admin/admusers/${id}`);
    if (resp) {
      console.log(resp);
      setUsers(resp);
      setLoading(false);
    } else {
      toast.error("Failed fetching users");
    }
  };

  useEffect(() => {
    const idd = params.get("id");
    console.log(`Params are`);
    console.log(idd);
    if (idd) {
      fetchUser(idd).then(() => console.log("fetched users"));
    }
  }, [params]);

  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Accounts</title>
      </Head>
      <Checker admin={true}>
        {!loading && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <h1 className="h5 float-start">Accounts</h1>
                      <p className="float-end">
                        {user.name} {user.surname}
                      </p>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Balance</th>
                          <th scope="col">Platform</th>
                          <th scope="col">Leverage</th>

                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.accounts.map((e, i) => {
                          return (
                            <tr>
                              <td>
                                <div className="row">
                                  <div className="col-2">
                                    <img src="../../assets/img/meta5.png" />
                                  </div>
                                  <div className="col">
                                    <p className="small">
                                      #{e.id}{" "}
                                      <span className="badge bg-success">
                                        Live
                                      </span>
                                    </p>
                                    <p className="small">
                                      Standard MT5 -{" "}
                                      {e.islamic && (
                                        <span className="badge bg-light text-dark">
                                          Islamic
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-brand-green">
                                  {e.balance} USD
                                </p>
                              </td>
                              <td>MT5</td>
                              <td>{e.acc_leverage}</td>
                              <td className="clearfix">
                                <div className="float-end">
                                  <a className="btn btn-sm btn-danger">Ban</a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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
