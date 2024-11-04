import React, { useState } from 'react';
import './grid.css';
import GridItem from './GridItem';

const Editor = () => {
  const [gridItems, setGridItems] = useState([]);

  const addGridItem = () => {
    setGridItems([...gridItems, { type: '', content: '' }]);
  };

  const updateGridItem = (index, updatedItem) => {
    const newGridItems = [...gridItems];
    newGridItems[index] = updatedItem;
    setGridItems(newGridItems);
  };

  return (
    <div className="editor">
      <div className="grid">
        {gridItems.map((item, index) => (
          <GridItem key={index} item={item} index={index} updateItem={updateGridItem} />
        ))}
      </div>
      <button onClick={addGridItem}>Adicionar Quadrado</button>
    </div>
  );
};

export default Editor;
