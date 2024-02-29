
import './App.css';
// import LandingPage from './Pages/Landing';
import Hero from './components/hero/Hero';
import SigninForm from './components/Form/SigninForm';
import ShoppingCart from './components/Add-To-Cart/Add';



function App() {
  return <div className='App'>
    {/* <LandingPage /> */}
    <Hero />
    <SigninForm />
    <ShoppingCart />
  </div>;
}

export default App;
