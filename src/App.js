import './App.css';
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import CallToAction from './components/CallToAction.js';
import Specials from './components/Specials.js';
import CustomersSay from './components/CustomersSay.js';
import Chicago from './components/Chicago.js';

function App() {
  return (
    <div>
      <Header>
        <Nav />
      </Header>
      <Main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
