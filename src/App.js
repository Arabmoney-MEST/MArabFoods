
import './App.css';
// import LandingPage from './Pages/Landing';
import Hero from './components/hero/Hero';
import SigninForm from './components/Form/SigninForm';



function App() {
  return <div className='App'>
    {/* <LandingPage /> */}
    <Hero />
    <SigninForm />
  </div>;
}

export default App;
