// import "./App.css";

// import Alert from "./components/Alert";
// function App() {
//   return (
//     <div>
//       <Alert>
//         BWOPPPP BWIPPP <span>! </span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

import Button from "./components/button";
import Alert from "./components/Alert";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>ALERT!</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>BWIPPy</Button>
    </div>
  );
}

export default App;
