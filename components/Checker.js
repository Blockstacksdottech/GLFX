import { UserContext } from "@/contexts/UserContext";
import { isLogged, logout } from "@/helpers/helpers";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/modular/Loader.module.css";

const Checker = ({ children, admin, register }) => {
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
      obj.emal = resp.email;
      obj.name = resp.name;
      obj.surname = resp.surname;
      obj.company_name = resp.company_name;
      obj.phone = resp.phone;
      setUser(obj);
      return obj;
    } else {
      logout(setUser);
      return {
        logged: false,
      };
    }
  }

  useEffect(() => {
    checkUser().then((res) => {
      if (res.logged) {
        console.log("logged in");
        console.log(res);
        if (admin && !res.isA) {
          router.push(res.path);
        } else if (!admin && res.isA) {
          router.push(res.path);
        }
        setLoading(false);
      } else {
        console.log("need login");
        if (register) {
          router.push("/register");
        } else {
          router.push("/login");
        }
      }
    });
  }, [User.logged]);

  return (
    <>
      {loading && (
        <div className={styles["full-container"]}>
          <div className={styles["lds-grid"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      {!loading && <>{children}</>}
    </>
  );
};

export default Checker;
