import React from "react";
// styles
import Colors from "./styles/settings/colors";
import Gaps from "./styles/settings/gaps";
import Reset from "./styles/generic/reset";
import Elements from "./styles/base/elements";
// routes
import Routes from "./routes";
// contexts
import { Modal } from "./hooks/modal";

const App = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Reset />
      <Elements />

      <Modal>
        <Routes />
      </Modal>
    </>
  );
};

export default App;
