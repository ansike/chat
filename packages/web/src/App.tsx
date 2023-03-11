import { useQuery } from "@apollo/client";
import { GlobalContext } from "./context";
import SelfRouter from "./router";
import { UserType } from "./page/Chat/type";
import { GET_ALL_USERS } from "./gql/user";

import "antd/dist/reset.css";
import "./App.css";
import { Spin } from "antd";

function App() {
  const uid = new URLSearchParams(window.location.search).get("uid");
  const { loading, error, data } = useQuery<{ users: UserType[] }>(
    GET_ALL_USERS
  );
  const user = data?.users.find((user) => user._id === uid);

  if (error) {
    return <div>GET user error</div>;
  }

  return (
    <GlobalContext.Provider
      value={{
        user: user || null,
        userList: data?.users || null,
      }}
    >
      <div className="App">
        {loading ? <Spin spinning={loading}></Spin> : <SelfRouter />}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
