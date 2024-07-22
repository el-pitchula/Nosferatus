import React, { useState } from 'react';

const Profile = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    setBlocks([...blocks, { id: Date.now(), content: 'New Block' }]);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={addBlock}>Add Block</button>
      <div>
        {blocks.map(block => (
          <div key={block.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            {block.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
