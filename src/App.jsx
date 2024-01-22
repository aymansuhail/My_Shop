import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Layout from "./component/shared/Layout"
import Dashboard from "./component/Dashboard"
import Products from "./component/Products"
import Login from "./component/Login"
import Orders from "./component/Orders"
import Customer from "./component/Customer"
function App() {

  return (
    <Router>
      <Routes>
          {/* this is for including header and sidebar
           with different content to load on click */}
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products/>} />
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="customers" element={<Customer/>}/>
          </Route>
           
           {/* outside the Route we take another route iff we do not 
           want the Layout to load with a specific route (header and sidebar)
           eg login page */}
           <Route index element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
