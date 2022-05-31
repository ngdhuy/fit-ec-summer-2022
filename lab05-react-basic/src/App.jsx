import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title="Welcome EC Summer course 2022 - FIT@HCMUS" />
      <Content />
      <Footer message='Design by student of FIT@hcmus' />
    </div>
  );
}

export default App;
