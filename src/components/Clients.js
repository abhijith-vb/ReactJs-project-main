import React, { useEffect, useState, useContext, Fragment } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import UserTypeContext from './context/Usertype';

const Client = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const userTypes = useContext(UserTypeContext); //context

  const [data, setData] = useState([]); //fetched data
  const [isLoading, setLoading] = useState(true); //loading img data

  const [addFormData, setAddFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [editFormData, setEditformData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditformData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone
    };
    const newContacts = [...data, newContact];
    setData(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone
    };
    const newContacts = [...data];
    const index = data.findIndex((user) => user.id === editContactId);
    newContacts[index] = editedContact;

    setData(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditContactId(user.id);

    const formValues = {
      name: user.name,
      email: user.email,
      phone: user.phone
    };

    setEditformData(formValues);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...data];
    const index = data.findIndex((user) => user.id === contactId);
    newContacts.splice(index, 1);
    setData(newContacts);
  };

  useEffect(() => {
    axios.get(url).then((json) => setData(json.data));
    setTimeout(() => {
      setLoading(false); //getting data using axios
    }, 1000);
  }, []);

  const renderTable = () => {
    return data.map((user, index) => {
      //collecting required datas
      return (
        <Fragment key={index}>
          {editContactId === user.id ? (
            <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />
          ) : (
            <ReadOnlyRow
              userTypes={userTypes.user}
              user={user}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </Fragment>
      );
    });
  };

  return (
    <>
      {isLoading && (
        <div>
          <img
            className="image center"
            src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
            alt="images"></img>
        </div>
      )}

      <div className="container">
        <h1 className="tableHeading" id="title">
          Table of data retrieved
        </h1>
      </div>
      <div>
        <form onSubmit={handleEditFormSubmit}>
          <table className=" table " id="users">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                {userTypes.user === 'ADMIN-USER' && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>{renderTable({})}</tbody>
          </table>
        </form>
      </div>

      <div className="newinput">
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Enter Name...."
              className="newinputfield"
              onChange={handleAddFormChange}></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              required="required"
              placeholder="Enter Email...."
              className="newinputfield"
              onChange={handleAddFormChange}></input>
          </div>
          <div>
            <input
              type="text"
              name="phone"
              required="required"
              placeholder="Enter PhoneNo...."
              className="newinputfield"
              onChange={handleAddFormChange}></input>
          </div>
          <div className="addbutton">
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Client;
