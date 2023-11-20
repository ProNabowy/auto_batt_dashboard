import { useState } from 'react';
import './App.css';
import MainPanel from './layouts/MainPanel/MainPanel';
import MainContent from './components/MainContent/MainContent';

function App() {

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="App">

      <MainPanel isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MainPanel>

      <MainContent isExpanded={isExpanded} />

    </div>
  );
}

export default App;
