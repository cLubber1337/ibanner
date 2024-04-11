const apple = document.getElementById('apple')
const google = document.getElementById('google')
const continueButton = document.getElementById('continue-button')

function activate(element) {
  apple.classList.remove('plan-active')
  google.classList.remove('plan-active')
  element.classList.add('plan-active')
}

apple.addEventListener('click', () => activate(apple))
google.addEventListener('click', () => activate(google))

continueButton.addEventListener('click', () => {
  const activeElement = document.querySelector('.plan-active')
  window.location.href = activeElement === apple ? 'https://apple.com' : 'https://google.com'
})
