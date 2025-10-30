function isValidNZIRD(ird) {
  // Remove any non-digit characters
  const cleaned = ird.replace(/\D/g, '')

  // Must be 8 or 9 digits
  if (!/^[0-9]{8,9}$/.test(cleaned)) return false

  const digits = cleaned.split('').map(Number)
  let base = digits.slice(0, -1) // All but last digit
  const checkDigit = digits[digits.length - 1]

  // For 9-digit IRD: use first 8 digits as base
  if (digits.length === 9) {
    base = digits.slice(0, 8)
  }

  // Weighting factors
  const weights = [3, 2, 7, 6, 5, 4, 3, 2]

  // Calculate sum
  let sum = 0
  for (let i = 0; i < 8; i++) {
    sum += base[i] * weights[i]
  }

  const remainder = sum % 11

  let calculatedCheck
  if (remainder === 0) {
    calculatedCheck = 0
  } else {
    calculatedCheck = 11 - remainder
    if (calculatedCheck === 10) calculatedCheck = 0 // Special rule
  }

  return calculatedCheck === checkDigit
}
function validateIRD() {
  const input = document.getElementById('ird').value.trim()
  const resultDiv = document.getElementById('result')

  if (!input) {
    resultDiv.innerHTML =
      '<span class="invalid">Please enter an IRD number</span>'
    return
  }

  if (isValidNZIRD(input)) {
    resultDiv.innerHTML = '<span class="valid">Valid NZ IRD Number</span>'
  } else {
    resultDiv.innerHTML = '<span class="invalid">Invalid NZ IRD Number</span>'
  }
}

// Optional: Allow pressing Enter in the input field
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ird')
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validateIRD()
  })
})
