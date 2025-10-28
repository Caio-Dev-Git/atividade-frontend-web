document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");
      const reload = link.dataset.reload === "true"; 

      if (reload) {
      
        return; 
      }

      e.preventDefault();
      fetch(url)
        .then(res => res.text())
        .then(data => {
          const parser = new DOMParser();
          const html = parser.parseFromString(data, "text/html");
          const newContent = html.querySelector("main").innerHTML;
          main.innerHTML = newContent;
          window.history.pushState({}, "", url);
          if (typeof showMessage === "function") {
            showMessage("Página carregada com sucesso!");
          }
        })
        .catch(() => {
          main.innerHTML = `<p style="color:red;">Erro ao carregar a página.</p>`;
        });
    });
  });
});
