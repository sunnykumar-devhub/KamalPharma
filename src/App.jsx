import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-[#7A3E9D] selection:text-white">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
