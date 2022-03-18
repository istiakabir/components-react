 import logo from './logo.svg';
import './App.css';

const singer = {name:'Dr.Khan Mia', profession : 'singer'}



const singers = [
  {name:'Dr.Khan Mia', profession : 'singer'},
  {name:'ala Mia', profession : 'dancer'},
  {name:'Dohola Mia', profession : 'jouker'},
  {name:'LLW Mia', profession : 'singer'}
];

function App() {

  const nayoks =['Salman Khan', 'Kokil Kha','Kobur', 'Razzak', 'Anwar']

  
  return (
    <div className="App">
      {
    nayoks.map(nayok => <Person name ={nayok}></Person>)
  }

  {
    singers.map(singer => <Friend name={singer.name} profession ={singer.profession}></Friend>)
  }

      {/* <Person name={nayoks[0]} nayika ='Zerina'></Person>
      <Person name={nayoks[1]}  nayika ='Lalia'></Person>
      <Person name={nayoks[2]}  nayika ='Kopila'></Person> */}
      {/* <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend> */}
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
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  )
}

export default App;
