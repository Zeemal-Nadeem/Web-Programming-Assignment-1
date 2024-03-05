function viewApplications() {
    const formElements = document.getElementById('jobApplicationForm').elements;

    const tableBody = document.getElementById('applicationsTableBody');

    tableBody.innerHTML = '';

    const rowData = [];
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type !== 'button') {
        rowData.push(formElements[i].value);
      }
    }

    // Create a new row in the table
    const newRow = tableBody.insertRow();
    for (let i = 0; i < rowData.length; i++) {
      const cell = newRow.insertCell();
      cell.textContent = rowData[i];
    }

    // Display the table
    document.getElementById('applicationsTable').style.display = 'table';
  }