import React from 'react';

const ItemChannel = ({
  name = '',
  desc = '',
}) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default ItemChannel;
