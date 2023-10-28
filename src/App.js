import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import{Navbar} from './Navbar'
import {Shop} from './Pages/shop/Shop'
import {Cart} from './Pages/cart/Cart'
import { ShopContextProvider } from './Context/Shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
