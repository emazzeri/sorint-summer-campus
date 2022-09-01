import React from 'react'

const Input = ({ label, name, value, onChange }) => {
  return (
    <div className='ssc-input'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}

export default Input
