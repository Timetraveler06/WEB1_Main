
const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownTrigger.addEventListener("click", () => {
  dropdownContent.style.display =  dropdownContent.style.display === "none" ? "block" : "none";
});

function Deposit(){
  
  const depositAmountInput = document.getElementById("deposit-amount");
  const depositScreen = document.querySelector(".deposit-screen");
  const depositButton = document.getElementById("enter-btn");
  const currencySelectorElement = document.getElementById("currency-selector");
  currencySelectorElement.addEventListener("change", updateCurrencySymbol);

document.querySelector('a.deposit').addEventListener('click', (e) => {
  e.preventDefault();
  const depositCard = document.querySelector('.deposit-card');

  depositCard.style.display = depositCard.style.display === "none" ? "block" : "none";

});

// Listen for changes on the input field
depositAmountInput.addEventListener("input", () => {
// Update the text content of the deposit screen element
depositScreen.textContent = document.querySelector(".input-group-addon").textContent + depositAmountInput.value;

// Update the deposit button text content
depositButton.textContent = `Deposited ${document.querySelector(".input-group-addon").textContent}${depositAmountInput.value}`;
});

depositButton.addEventListener("click", () => {
  var card = document.querySelector(".deposit-card");
   card.style.transform = "rotateY(180deg)";
});
}
function updateCurrencySymbol() {
  var currencySymbolElement = document.querySelector(".input-group-addon");
   currencySelectorElement = document.getElementById("currency-selector");
  var selectedCurrency = currencySelectorElement.value;
  
  switch (selectedCurrency) {
    case "USD":
      currencySymbolElement.textContent = "$";
      break;
    case "EUR":
      currencySymbolElement.textContent = "€";
      break;
    case "GBP":
      currencySymbolElement.textContent = "£";
      break;
    case "Birr":
      currencySymbolElement.textContent = "Br";
    default:
      currencySymbolElement.textContent = "$";
      break;
  }
    // Update deposit screen and deposit button text content
    depositScreen.textContent = currencySymbolElement.textContent + depositAmountInput.value;
    depositButton.textContent = `Deposited ${currencySymbolElement.textContent}${depositAmountInput.value}`;
  
}


function Withdrawal(){
  document.querySelector('a.withdrawal').addEventListener('click', (e) => {
    e.preventDefault();
    const WithdrawalCard = document.querySelector('.withdrawal-card');
  
    WithdrawalCard .style.display = WithdrawalCard .style.display === "none" ? "flex" : "none";
  
  });
const withdrawalCard = document.querySelector('.withdrawal-card');
  const continueButton = document.getElementById('continue-btn');
  const verificationCodeInput = document.getElementById('verification-code');

  continueButton.addEventListener('click', function () {
    // Check if the entered verification code is correct (assuming it should match a pre-generated code)
    const generatedCode = generateCode(); // Generate a 6-digit code (your implementation here)
    const enteredCode = verificationCodeInput.value;
    
    if (enteredCode === generatedCode) {
      withdrawalCard.classList.add('flipped');
      withdrawalCard.addEventListener('transitionend', function () {
        // Change the content to "Success" after the flip animation is completed
        withdrawalCard.innerHTML = '<p>Success</p>';
        withdrawalCard.classList.remove('flipped');
      }, { once: true });
    } else {
      alert('Incorrect verification code. Please try again.');
    }
  });

  function generateCode() {
    // Your code to generate a 6-digit code here
    return '123456'; // Replace with your actual code generation logic
  }
}
const withdrawalCard = document.querySelector('.withdrawal-card');
const continueButton = document.getElementById('continue');

continueButton.addEventListener('click', function () {
  withdrawalCard.classList.add('flipped');
});

$(document).ready(function() {
  $(".dropDown-withdrawal").click(function() {
    $("#bank-transfer-additional-info").toggle();
  });
});
function showOptions(optionsId) {
  var options = document.getElementById(optionsId);
  if (options.style.display === "none") {
      options.style.display = "block";
  } else {
      options.style.display = "none";
  }
}

const paidAmounts = [25000, 35000, 18000, 40000, 22000, 30000, 20000]; // Replace with your actual paid amounts for each day of the week
const pendingAmounts = [20000, 35000, 25000, 18000, 30000, 22000, 40000]; // Replace with your actual pending amounts for each day of the week

  // Create the chart for the paid amounts
  const paidChart = new Chart(document.getElementById('paid-chart'), {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Replace with the days of the week
      datasets: [{
        label: 'Amount',
        data: paidAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 50000 // Adjust the step size of the y-axis as needed
          }
        }
      }
    }
  });


  // Create the chart for the pending amounts
  const pendingChart = new Chart(document.getElementById('pending-chart'), {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Replace with the days of the week
      datasets: [{
        label: 'Amount',
        data: pendingAmounts,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust the colors as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10000 // Adjust the step size of the y-axis as needed
          }
        }
      }
    }
  });