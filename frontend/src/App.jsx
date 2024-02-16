import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <HomePage />
      </div>

      <Footer />
    </div>
  );
};

export default App;
