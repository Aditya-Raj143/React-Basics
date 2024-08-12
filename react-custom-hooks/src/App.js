import './App.css';
import { useCounter } from './useCounter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cat } from './Cat';

function App() {

  const {count, increase, decrease, reset} = useCounter();  
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <div> 
          <h1>{count}</h1>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
        <br/>
        <div>
          < Cat />
        </div>
      </QueryClientProvider>
    </div>

  );
}

export default App;
