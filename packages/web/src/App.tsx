import { useEffect, useState } from "react";
import "./App.css";
import { GlobalContext } from "./context";
import SelfRouter from "./router";
import { request } from "./utils/fetch";
import { UserType } from "./page/Chat/type";

function App() {
  const [curUser, setCurUser] = useState<UserType | null>(null);

  const uid = new URLSearchParams(window.location.search).get("uid");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await request<UserType[]>("/api/user/list");
    const u = res.find((u) => u._id === uid);
    u && setCurUser(u);
  };

  return (
    <GlobalContext.Provider value={{ user: curUser }}>
      <div className="App">
        <SelfRouter />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
