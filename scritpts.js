const shoppingForm = document.getElementById("shoppingForm")
const itemInput = document.getElementById("itemInput")
const checkboxGroup = document.getElementById("checkboxGroup")
const alertBox = document.getElementById("alert")

shoppingForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const itemText = itemInput.value.trim()
  if (itemText) {
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    const deleteButton = document.createElement("button")
    const img = document.createElement("img")

    checkbox.type = "checkbox"
    checkbox.className = "my-checkbox"

    label.appendChild(checkbox)
    label.appendChild(document.createTextNode(itemText))

    img.src = "./assets/trash.svg"
    img.alt = "Excluir"
    deleteButton.className = "delete"
    deleteButton.appendChild(img)

    deleteButton.addEventListener("click", () => {
      checkboxGroup.removeChild(label)
      showAlert()
    })

    label.appendChild(deleteButton)
    checkboxGroup.appendChild(label)

    itemInput.value = "" // Limpa o campo de entrada
  } else {
    alert("Por favor, insira um item.") // Alerta se o campo estiver vazio
  }
})

function showAlert() {
  alertBox.style.display = "flex" // Use alertBox
  setTimeout(() => {
    alertBox.style.display = "none"
  }, 2000)
}
