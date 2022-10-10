import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation />
        <RestaurantContainer />
    </div>
  );
}

export default App;
