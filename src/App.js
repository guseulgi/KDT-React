import './App.css';
import logo from './logo.svg'
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import Inline from './components/Inline';
import EventHandler from './components/EventHandler';
import Example from './components/Example';
import State from './components/State';
import State2 from './components/State2';
import Counter from './components/Counter';
import Condition from './components/\bCondition';
import ConditionEx from './components/ConditionEx';
import StateAndVariable from './components/StateAndVariable';
import StateProblem from './components/StateProblem';
import List from './components/List';
import PropsHeader from './components/PropsHeader';
import MultiProps from './components/MultiProps';
import ClassProps from './components/ClassProps';
import ListExam from './components/ListExam';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import ProfileList from './components/ProfileList';


function App() {
  const arr = ['뽀로로', '루피', '크롱'];
  const obj = {
    name:'뽀로로',
    age:5,
    nickname:'사고뭉치',
  }
  return (
    <div className="App">
      {/* <CustomList arr={arr}/>
      <CustomObj obj={obj} /> */}
      <ProfileList/>
    </div>
  );
}

export default App;
