function showMessage(text, type = "info") {
  const msg = document.createElement("div");
  msg.textContent = text;
  msg.className = `msg-${type}`;
  Object.assign(msg.style, {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: type === "error" ? "#ff7b00" : "#0056b3",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    zIndex: "1000",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    fontWeight: "bold"
  });

  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showMessage("Bem-vindo à plataforma da ONG Esperança 💙🧡");
});