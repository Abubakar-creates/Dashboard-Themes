import logo from './logo.svg';
import './App.css';
import PortalLayout from './components/portalLayout/PortalLayout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';

function App() {
  return (
    <PortalLayout>
     <Routes>
<Route  path='/dashboard' element={<Dashboard />} />

      </Routes>
     
    </PortalLayout>
  );
}

export default App;
