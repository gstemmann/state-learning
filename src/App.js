import logo from './logo.svg';
import Circle from "./Circle";
// import Button from './button';
// import Counter from './Counter';
// import Group from './Group';
import NumbersList from './NumbersList';


function App() {
  return (
    <div className="App">
       <Circle color="red" idx={4}/>
       <Circle color="blue" idx={5}/>
       <Circle color="peachpuff" idx={6}/>
       <Circle color="green" idx={7}/>
       <Circle color="yellow" idx={9}/>
    </div>
  );
}

export default App;
