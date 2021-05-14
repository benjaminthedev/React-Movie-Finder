import Movie from './components/Movie';

function App() {

  const movies = ['title one', 'title two', 'title three'];
  console.log('Process ENVV:')
  console.log(process.env);
  console.log('API KEY:')
  console.log(process.env.API_KEY);
  console.log('API POP')
  console.log(process.env.NODE_ENV);


  return (
    <div className="App">
      <h1>movie App</h1>
      <small>You are running this application in <b>{process.env.API_KEY}</b>c mode.</small>

    {movies.map(movie => (
      <Movie />
    ))}

    </div>
  );
}

export default App;