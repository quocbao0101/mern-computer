import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './page/home';
import Index from './page/header/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
