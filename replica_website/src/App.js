
import './App.css';
// list of all function components used
import Navoptions from './components/Navbar'
import Images from './components/Image';
import Logo1 from './components/logo1';
import Logo2 from './components/logo2';
import Searcbar from './components/searchbar';
import Topsearch from './components/topsearch';
import Buttons from './components/button';
import Info from './components/information';
import Share from './components/share';

function App() {
  return (
    <div >
      <header>
        <Navoptions />
        <Images />
        <Logo1 />
        <Logo2 />
        <Searcbar />
        <Topsearch />
        {/* function compnent passing props */}
        <Buttons list="We'll add a list of Anime soon"/>
        <Share />
        <Info />
      </header>
    </div>
  );
}

export default App;
