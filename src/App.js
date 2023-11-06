import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
