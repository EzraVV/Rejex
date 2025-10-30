function isValidNZIRD(ird) {
  const cleaned = ird.replace(/\D/g, '')
  if (!/^[0-9]{8,9}$/.test(cleaned)) return false

  const digits = cleaned.split('').map(Number)
  const checkDigit = digits[digits.length - 1]
  let base
  if (digits.length === 9) {
    base = digits.slice(0, 8)
  } else {
    base = digits.slice(0, 8)
  }

  const weights = [3, 2, 7, 6, 5, 4, 3, 2]
  let sum = 0
  for (let i = 0; i < 8; i++) {
    sum += base[i] * weights[i]
  }

  const remainder = sum % 11
  let calculatedCheck = remainder === 0 ? 0 : 11 - remainder
  if (calculatedCheck === 10) calculatedCheck = 0

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

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('ird')
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validateIRD()
  })
})
