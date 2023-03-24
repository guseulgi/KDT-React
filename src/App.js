import './App.css';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
      <ClassComponent/>
      <FunctionComponent/>
    </div>
  );
}

export default App;
