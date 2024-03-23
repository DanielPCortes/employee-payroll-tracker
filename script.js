// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // Defined collectEmplyees function
  const employeesArray = []
  let coninuation = true
  
  while (coninuation) {
    let employeeFN
    let employeeLN
    let employeeSal

    // Added nested while loops for each vaiable
    while (!employeeFN || !isNaN(employeeFN)) {
      employeeFN = prompt('Please enter employee first name.')
    }
    while (!employeeLN || !isNaN(employeeLN)) {
      employeeLN = prompt('Please enter employee last name.')
    }
    while (!employeeSal || isNaN(employeeSal)) {
      employeeSal = prompt('Please enter employee salary.')
    }

    const employeeObj = {
      firstName: employeeFN,
      lastName: employeeLN,
      salary: Number(employeeSal)
    }

    employeesArray.push(employeeObj)
    
    const enterMore = confirm('Would you like to add another employee, if not press cancel.')

      coninuation = enterMore
  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // Used the Array reduce method to find the average salary
  const salAvg = employeesArray.reduce((x,y) => (x+y.salary),0)/employeesArray.length

  // Using math.round to round the average
  const salRound = Math.round(salAvg)

  // Console log of the rounded average
  console.log(`The average salary for our employee(s) is $` + Number(salRound))
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Uses Math.floor and Math.random on the length emplyeesArray
  const randomEmpIndex = Math.floor(Math.random() * employeesArray.length)

  // Assigns a constant of randomEmp to the previous constant that is above
  const randomEmp = employeesArray[randomEmpIndex]

  // Console logs the random employee
  console.log(`The winner of our random draw is: ${randomEmp.firstName} ${randomEmp.lastName}, congratulations!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
