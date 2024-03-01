import Head from "next/head";
import Navbar from "./component/navbar";
import Checker from "@/components/Checker";
import { useEffect, useState } from "react";
import { postReq, req } from "@/helpers/helpers";
import { toast } from "react-toastify";

export default function Clients() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const resp = await req("admin/admusers");
    if (resp) {
      setUsers(resp);
      setLoading(false);
    } else {
      toast.error("Failed fetching users");
    }
  };

  const handleUser = async (id, action) => {
    const body = {
      id,
      action,
    };
    const resp = await postReq("admin/banuser", body);
    if (resp) {
      toast.success(`User ${action === "ban" ? "banned" : "unbanned"}`);
      fetchUsers();
    } else {
      toast.error("Failed");
    }
  };

  useEffect(() => {
    fetchUsers().then(() => console.log("fetched users"));
  }, []);

  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Clients</title>
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
                      <h1 className="h5 float-start">Clients</h1>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Company Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((e, i) => {
                          return (
                            <tr key={`row-${i}`}>
                              <td className="text-capital">{`${e.name} ${e.surname}`}</td>
                              <td className="text-capital">{e.company_name}</td>
                              <td>{e.email}</td>
                              <td>{e.phone}</td>
                              <td className="clearfix">
                                <div className="float-end">
                                  <a
                                    href={`/admpnl/accounts?id=${e.id}`}
                                    className="btn btn-sm btn-secondary me-2"
                                  >
                                    Accounts
                                  </a>
                                  <a
                                    href={`/admpnl/wallets?id=${e.id}`}
                                    className="btn btn-sm btn-dark me-2"
                                  >
                                    Transactions
                                  </a>
                                  <a
                                    href={`/admpnl/kyc?id=${e.id}`}
                                    className="btn btn-sm btn-dark me-2"
                                  >
                                    Documents
                                  </a>
                                  <a
                                    className="btn btn-sm btn-danger"
                                    onClick={() =>
                                      handleUser(
                                        e.id,
                                        e.is_baned ? "unban" : "ban"
                                      )
                                    }
                                  >
                                    {e.is_baned ? "Unban" : "Ban"}
                                  </a>
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
