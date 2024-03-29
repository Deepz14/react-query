import './App.css'
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';
import RQSuperHeroe from './components/RQSuperHeroe';
import ParallelQueries from './components/ParallelQueries';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import DynamicQuery from './components/DynamicQueries';
import DependentQuery from './components/DependentQueries';
import PaginatedQuery from './components/PaginatedQueries';
import InfiniteQuery from './components/InfiniteQueries';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/infinite-query' element={<InfiniteQuery />} />
            <Route path='/paginated-query' element={<PaginatedQuery />} />
            <Route path='/dependent-query' element={<DependentQuery email={'vishwas@example.com'} />} />
            <Route path='/dynamic-query' element={<DynamicQuery heroIds={[1, 3]} />} />
            <Route path='/parallel-query' element={<ParallelQueries />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroe />} />
            <Route path='/super-heroes' element={<SuperHeroes />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
