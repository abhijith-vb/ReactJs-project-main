import React from 'react';

const ReadOnlyRow = ({ user, handleEditClick, handleDeleteClick, userTypes }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      {userTypes === 'ADMIN-USER' && (
        <td>
          <button
            type="button"
            className="editable"
            onClick={(event) => handleEditClick(event, user)}>
            Edit
          </button>
          <button type="button" className="deletable" onClick={() => handleDeleteClick(user.id)}>
            Delete
          </button>
        </td>
      )}
    </tr>
  );
};

export default ReadOnlyRow;
