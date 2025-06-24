import React from 'react';


function StaffRow({ onePerson }) {
  return (
    // onePerson is an object with properties
    <tr>
      <td>
        <img src={onePerson.picture.thumbnail} alt="Thumbnail"/>
      </td>
      <td>
        <a href={`mailto:${onePerson.email}`}>
        {onePerson.name.first}&nbsp;
        {onePerson.name.last}
        </a>
      </td>
      <td>{onePerson.phone}</td>
      <td>{onePerson.location.city}</td>
    </tr>
  );
}


export default StaffRow;     // export to App.js. must have this line
