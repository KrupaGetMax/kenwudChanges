
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Layout from './Layout'
import { HelmetProvider } from "react-helmet-async";
function App() {


  return (
    <HelmetProvider>
    <ThemeProvider>
      <CartProvider>
        
        <main className='min-h-screen'>
          <Layout />
        </main>
        
      </CartProvider>
    </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
