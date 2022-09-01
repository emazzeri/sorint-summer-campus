import React from 'react';

const Item = ({ data }) => {
  return (
    <div className='user-data'>
      <h3>{data.Name}</h3>
      <div>
        <p>{data.Address}</p>
        <p>{data.Email}</p>
        <p>{data.Phone}</p>
        <p>{data.Website}</p>
      </div>
      <p>{data.Notes}</p>
    </div>
  )
};

export default Item;