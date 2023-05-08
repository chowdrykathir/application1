import React, { useState } from "react";
import Header from "./header";

import Sidebar from "./Sidebar";

const App = () => {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };
  return(
    <div>
    <Header click={handleClick} />
    <Sidebar open={open} />
    </div>
  )
};

export default App;
 