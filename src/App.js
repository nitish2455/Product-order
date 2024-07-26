import React from 'react';
import Navbar from "./components/Navbar"
import ProductTable from './components/ProductTable';


const App = () => {
  return (
    <div>
<Navbar/>
<header className="App-header">
                <h1 className="text-2xl font-bold">Product Order</h1>
            </header>
            <ProductTable />
    </div>
  );
};

export default App;
