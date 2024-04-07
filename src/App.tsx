import AppMainRoute from './routes/AppMainRoute';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <AppMainRoute />
    </BrowserRouter>
  );
};

export default App;
