 import logo from './logo.svg';
import './App.css';

const singer = {name:'Dr.Khan Mia', Profession : 'singer'}

function App() {
  return (
    <div className="App">
      <Person name='Salman Khan' nayika ='Zerina'></Person>
      <Person name='Kokil Kha' nayika ='Lalia'></Person>
      <Person name='Kobur' nayika ='Kopila'></Person>
      <Friend movie ='Singham'></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

const Person = (props) => {
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
    
  
    );
}

function Friend(props){
  return(
    <div className='container'>
      <h1>Habib Khan</h1>
      <p>Profession: Maramari</p>
      <p>Movie:{props.movie}</p>
    </div>
  )
}

export default App;
