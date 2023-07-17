// Example data for the first bar chart
var income = 20000;
var outcome = 8000;

const data = {
    labels: ['Monthly Income', 'Monthly Outcome', 'Monthly Total'],
    datasets: [{
        label: 'Money',
        backgroundColor: 'rgba(0, 90, 156)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 50,
        data: [income, outcome, income - outcome],
    }]
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const ctx = document.getElementById('chart').getContext('2d');
const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

// Example data for the second bar chart
var wealth = 102000;
var debt = 43000;

const dataa = {
    labels: ['Wealth', 'Debt', 'Total'],
    datasets: [{
        label: 'Money',
        backgroundColor: 'rgba(0, 90, 156)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 50,
        data: [wealth, debt, wealth - debt],
    }]
};

const optionss = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const ctxx = document.getElementById('chart-2').getContext('2d');
const barChart2 = new Chart(ctxx, {
    type: 'bar',
    data: dataa,
    options: optionss
});

const dotLeft = document.getElementById('sdot-left');
const dotRight = document.getElementById('dot-right');


dotLeft.addEventListener('click', function () {
    document.getElementById('chartdiv').style.visibility = 'visible';
    document.getElementById('chartdiv-2').style.visibility = 'hidden';
    console.log('Show second chart');

});

dotRight.addEventListener('click', function () {
    document.getElementById('chartdiv').style.visibility = 'hidden';
    document.getElementById('chartdiv-2').style.visibility = 'visible';
    console.log('Hide second chart');
    console.log('Right dot clicked!');
});

const accountDiv = document.getElementById('account');
accountDiv.innerHTML = `<h1 style="text-align: center;font-family:Arial, Helvetica, sans-serif;font-weight:bold;color:white;">Account</h1><br><p style="font-family:Arial, Helvetica, sans-serif;color:white;"> ${wealth}$</p><hr>`;

    function deposit() {
        const amount = parseFloat(document.getElementById('transactionInput').value);
        if (!isNaN(amount) && amount > 0) {
            wealth += amount;
            accountDiv.innerHTML = `<h1 style="text-align: center;font-family:Arial, Helvetica, sans-serif;font-weight:bold;color:white;">Account</h1><br><p style="font-family:Arial, Helvetica, sans-serif;color:white;"> ${wealth}$</p><hr>`;
        }
    }

    // Withdraw function
    function withdraw() {
        const amount = parseFloat(document.getElementById('transactionInput').value);
        if (!isNaN(amount) && amount > 0 && amount <= wealth) {
            wealth -= amount;
            accountDiv.innerHTML = `<h1 style="text-align: center;font-family:Arial, Helvetica, sans-serif;font-weight:bold;color:white;">Account</h1><br><p style="font-family:Arial, Helvetica, sans-serif;color:white;"> ${wealth}$</p><hr>`;
        }
        else{
            wealth = 0;
            accountDiv.innerHTML = `<h1 style="text-align: center;font-family:Arial, Helvetica, sans-serif;font-weight:bold;color:white;">Account</h1><br><p style="font-family:Arial, Helvetica, sans-serif;color:white;"> ${wealth}$</p><hr>`;
        }
    }



