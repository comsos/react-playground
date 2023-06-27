import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Cosmos" age='23' >
        <p>Child</p>
      </Greet>
      <Greet name="Denji" age='16'>
        <button>Actions</button>
      </Greet>
      <Greet name="Power" age='6000'/>
      <Welcome name="Cosmos" age='23'/>
      <Welcome name="Denji" age='16'/>
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick /> 
      <Counter />
      <EventBind />
      <ParentComponent />
      <UserGreeting />*/}
      <NameList />
     
      

    </div>
  );
}

// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Greet/>
//       </div>
//     );
//   }
// }

export default App;
