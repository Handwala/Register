import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "containers/HomePage";
import Dashboard from "containers/Dashboard";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";
import { store } from 'store'

const App = () => {
  return (
   <Provider store={store}>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
      </Routes>
    </Router>
   </Provider>
  )
}

export default App
