import React from "react";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "./styles/settings/colors";
import Gaps from "./styles/settings/gaps";
import Reset from "./styles/generic/reset";
import Elements from "./styles/base/elements";
// routes
import Routes from "./routes";
// contexts
import { Modal } from "./hooks/modal";
import { CreateUsers } from "./hooks/create-user";

const App = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Reset />
      <Elements />

      <Modal>
        <CreateUsers>
          <Routes />
        </CreateUsers>
      </Modal>
    </>
  );
};

export default App;
