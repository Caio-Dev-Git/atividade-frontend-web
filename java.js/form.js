const masks = {
  "#cpf": value => value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"),

  "#telefone": value => value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2"),

  "#cep": value => value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
};

function validateForm(form) {
  let valid = true;
  form.querySelectorAll("input[required]").forEach(input => {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      valid = false;
    } else {
      input.style.borderColor = "#ccc";
    }
  });

  if (!valid) {
    alert("⚠️ Por favor, preencha todos os campos obrigatórios corretamente.");
    return false;
  }

  alert("✅ Cadastro realizado com sucesso!");
  form.reset();
  return true;
}

function handleInput(e) {
  const fn = masks[`#${e.target.id}`];
  if (fn) e.target.value = fn(e.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", e => {
    if (e.target.matches("form")) {
      e.preventDefault();
      validateForm(e.target);
    }
  });

  document.addEventListener("input", handleInput);
});