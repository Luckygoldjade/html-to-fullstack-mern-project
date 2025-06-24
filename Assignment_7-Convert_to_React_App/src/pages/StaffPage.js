import React from 'react';
import StaffRow from '../components/StaffRow.js';

// debugger starts here
debugger;

function StaffPage() {
    // create a state variable for the staff
    const [staff, setStaff] = React.useState([]);

    // fetch random users from the randomuser.me API
    const getStaff = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch random users');
                }
                return response.json();
            })
            .then(data => {
                setStaff(data.results);
            })
            .catch(error => {
                console.error(error);
                alert('Error: Failed to fetch random users'); // Show window alert with the error message
            });
    };

    React.useEffect(() => {
        getStaff(); // Fetch random users when the component mounts
    }, []);

    return (
      <>
        <h2>Staff Page</h2>
        <article>
          <p>
            <button id="fromServer" onClick={getStaff} value="Get Staff">
              Get Staff
            </button>
            &nbsp;from the server
            <a href="https://randomuser.me/" target="_blank" rel="noreferrer">randomuser.me
            </a>
          </p>
          <h3>Staff</h3>
          <table>
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((onePerson, index) => (
                <StaffRow key={index} onePerson={onePerson} />
              ))}
            </tbody>
          </table>
        </article>
      </>
    );
}

export default StaffPage;
