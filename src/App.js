import {
  Routes,
  Route,
  useHistory,
} from 'react-router-dom';
import Index from './page/header/Index';
import Home from './page/home';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
