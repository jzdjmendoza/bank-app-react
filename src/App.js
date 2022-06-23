import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card'

function App() {
  const user = {
    firstName: 'Tommy',
    lastName: 'Shelby',
    email: 'jm@gmail.com'
  }

  const userCard = {
    initialAmount: '1000',
    cardNumber: '1234 5678 9012 3456',
    expDate: '06/14',
  }

  return (

    <div className="App">
      <Header user={user}/>
      <Card userCard={userCard}/>
    </div>
  );
}

export default App;
