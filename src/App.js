import Movie from './components/Movie';

function App() {

  const movies = ['title one', 'title two', 'title three'];


  return (
    <div className="App">
      <h1>movie App</h1>

    {movies.map(movie => (
      <Movie />
    ))}

    </div>
  );
}

export default App;