import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

      {/* <h1>Auth app</h1> */}
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add" element={<Protected Cmp={AddProduct} />} />
      <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
