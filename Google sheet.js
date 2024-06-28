const scriptURL = 'https://script.google.com/macros/s/AKfycbxzL4ltE9mCsnwR0cN-KTPq1WiWb5XJw2w9Il8dxzqtlztj9j0O_aCUB8KeZ4fKRh8L/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})