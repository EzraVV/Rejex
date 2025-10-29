// 12-3456-7890123-001 bank structure
// 123-456-789 ird structure

document
  .getElementById('validationForm')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    const bankInput = document.getElementById('bankInput').value.trim()
    const irdInput = document.getElementById('irdInput').value.trim()

    const bankRegex = /^\d{2}-\d{4}-\d{7}-\d{3}$/
    const irdRegex = /^\d{3}-\d{3}-\d{3}$/

    const bankValid = bankRegex.test(bankInput)
    const irdValid = irdRegex.test(irdInput)

    const results = document.getElementById('results')
    results.innerHTML = `
    Bank Account: ${bankValid ? '✅ Valid' : '❌ Invalid'}<br>
    IRD Number: ${irdValid ? '✅ Valid' : '❌ Invalid'}
  `
  })
