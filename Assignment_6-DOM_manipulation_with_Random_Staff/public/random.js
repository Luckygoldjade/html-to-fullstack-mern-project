"use strict";

// See Exploration Modifying the DOM Tree
// Show the staff row data in a Table using tbody id="staffPerson"
function displayStaffTable(onePerson) {
    // onePerson is an object with properties
    staffPerson.innerHTML += `
    <tr>
    <td><img src="${onePerson.picture.thumbnail}" alt="thumbnail"/></td>
    <td>
        <a href="mailto:${onePerson.email}">
        ${onePerson.name.first} 
        ${onePerson.name.last}</a>
    </td>
    <td>${onePerson.phone}</td>
    <td>${onePerson.location.city}</td>
    </tr>
    `;
}


async function getRandomStaff(event) {
    event.preventDefault();     // prevent the default action of the event
    const targetId = event.target.id;

    // ternary operator. if then else
    const url = targetId === 'browReqPerson' ? "https://randomuser.me/api/" : "/random-staff";
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Could use a response.status == 200 if statement here
        if(response.status == 200) {
            // Show the staff row data in a Table using tbody id="staffPerson"
            displayStaffTable(data.results[0]);
        }

        // displayStaffTable(data.results[0]);
    }   catch (error) {
            console.log(error);
        }
}
 
/*
    Add event listeners to the buttons
*/
document.addEventListener('DOMContentLoaded', () => {
    const fromBrowserButton = document.getElementById('browReqPerson');
    fromBrowserButton.addEventListener('click', getRandomStaff);

    const fromServerButton = document.getElementById('servReqPerson');
    fromServerButton.addEventListener('click', getRandomStaff);
});
