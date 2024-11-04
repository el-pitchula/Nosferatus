import React, { useState } from 'react';

const GridItem = ({ item, index, updateItem }) => {
  const [editing, setEditing] = useState(false);

  const handleContentChange = (e) => {
    updateItem(index, { ...item, content: e.target.value });
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <div className="grid-item">
      {editing ? (
        <textarea value={item.content} onChange={handleContentChange} />
      ) : (
        <div>{item.content || 'Clique para Editar'}</div>
      )}
      <button onClick={toggleEditing}>{editing ? 'Salvar' : 'Editar'}</button>
    </div>
  );
};

export default GridItem;
