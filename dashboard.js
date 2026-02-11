// Set up some sample data
const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    borderWidth: 1
  }]
};

// Render a chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: sampleData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Manipulate the table rows (add your logic here)
const tableRows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 28, email: 'john@example.com' },
  // ... Add more sample data as needed
];

tableRows.forEach((row) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row">${row.id}</th>
    <td>${row.firstName}</td>
    <td>${row.lastName}</td>
    <td>${row.age}</td>
    <td>${row.email}</td>
  `;
  // Add the new row to your table
});
