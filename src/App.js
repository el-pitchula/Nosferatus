import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Viewer from './components/Viewer';

function App() {
  const [mode, setMode] = useState('edit');
  const [gridItems, setGridItems] = useState([]);

  const handleSave = (items) => {
    setGridItems(items);
    setMode('view');
  };

  return (
    <div className="App">
      <header>
        <h1>Portfólio Editor</h1>
        <button onClick={() => setMode(mode === 'edit' ? 'view' : 'edit')}>
          {mode === 'edit' ? 'Visualizar' : 'Editar'}
        </button>
      </header>
      {mode === 'edit' ? <Editor onSave={handleSave} /> : <Viewer gridItems={gridItems} />}
    </div>
  );
}

export default App;
