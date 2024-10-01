document.getElementById("add-employee").addEventListener("submit", function(event) {
    event.preventDefault();

    let employeeData = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dept: document.getElementById("dept").value,
        jobTitle: document.getElementById("jobTitle").value,
        salary: document.getElementById("salary").value
    };

    // Send data to the backend using fetch
    fetch('/add-employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Employee added successfully');
        loadEmployees();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function loadEmployees() {
    fetch('/employees')
    .then(response => response.json())
    .then(data => {
        let employeeList = document.getElementById("employee-list");
        employeeList.innerHTML = "<ul>";
        data.forEach(employee => {
            employeeList.innerHTML += `<li>${employee.FirstName} ${employee.LastName} - ${employee.JobTitle}</li>`;
        });
        employeeList.innerHTML += "</ul>";
    });
}

// Load employees on page load
loadEmployees();
