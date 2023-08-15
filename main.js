const form = document.getElementById('formulario')

form.addEventListener('submit', function(evento) {
  evento.preventDefault()

  const campo_A = document.getElementById('campo_A').value
  const campo_B = document.getElementById('campo_B').value

  if (campo_B > campo_A) {
    alert('O número digitado no campo B é maior do que o número do campo A')
  } else {
    alert('O número digitado no campo B não é maior do que o número do campo A')
  }

  console.log(campo_A)
  console.log(campo_B)
})
console.log(campo_A)