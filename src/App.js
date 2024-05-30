
import './App.css';
import Header from './component/Hedaer/Header'
import MoviesList from './component/MoviesList/MoviesList';
import TopContainer from './component/TopContainer/TopContainer';

function App() {
  return (
    <div className="App">
   <Header></Header>
   <TopContainer></TopContainer>
 
   <MoviesList></MoviesList>
    </div>
  );
}

export default App;
