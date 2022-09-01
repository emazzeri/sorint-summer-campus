import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../input/Input'
import Item from './Item'

const Content = () => {
  const initialValues = {
    Name: '',
    Address: '',
    Email: '',
    Phone: '',
    Website: '',
    Notes: '',
  }
  const [users, setUsers] = useState()
  const [newUser, setNewUser] = useState(initialValues)

  useEffect(() => {
    axios.get('https://summercampus.day/contacts/').then((response) => {
      setUsers(response.data)
    })
  }, [])

  const addUser = (event) => {
    event.preventDefault()

    axios
      .post('https://summercampus.day/contacts/', newUser)
      .then((response) => {
        setUsers(users.concat(newUser))
        setNewUser(initialValues)
      })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewUser({
      ...newUser,
      [name]: value,
    })
  }

  return (
    <div className="ssc-main">
      
      <section className="ssc-list">
        <div className="main">
          <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Notes</th>
              </tr>
              {users?.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.Name}</td>
                    <td>{val.Address}</td>
                    <td>{val.Email}</td>
                    <td>{val.Phone}</td>
                    <td>{val.Website}</td>
                    <td>{val.Notes}</td>
                  </tr>
                )
              })}
            </table>

          {/* <div className="rubrica">
            {users?.map((user) => (
              <Item key={`user-${user.ID}`} data={user} />
            ))}
          </div> */}
        </div>
      </section>

      <section className="ssc-form">
        <h2>Add contact</h2>
        <form onSubmit={addUser}>
          <Input
            label="Name"
            name="Name"
            value={newUser.Name}
            onChange={handleInputChange}
          />
          <Input
            label="Address"
            name="Address"
            value={newUser.Address}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            name="Email"
            value={newUser.Email}
            onChange={handleInputChange}
          />
          <Input
            label="Phone"
            name="Phone"
            value={newUser.Phone}
            onChange={handleInputChange}
          />
          <Input
            label="Website"
            name="Website"
            value={newUser.Website}
            onChange={handleInputChange}
          />
          <Input
            label="Notes"
            name="Notes"
            value={newUser.Notes}
            onChange={handleInputChange}
          />
          <button type="submit"> Submit </button>
        </form>
      </section>
    </div>
  )
}

export default Content
