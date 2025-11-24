// main.js



// Scroll suave para seções
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-scroll]");
  if (!target) return;

  const selector = target.getAttribute("data-scroll");
  const section = document.querySelector(selector);
  if (!section) return;

  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
});

const btnBurger = document.getElementById("menu-btn");
const mainNav = document.getElementById("menu");

btnBurger?.addEventListener("click", () => {
  const expanded = btnBurger.getAttribute("aria-expanded") === "true";
  btnBurger.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mainNav.classList.remove("open");
    btnBurger.setAttribute("aria-expanded", "false");
  }
});


// === LÓGICA DE CONVERSÃO DE PEDIDOS VIA WHATSAPP ===
document.addEventListener('DOMContentLoaded', () => {
    // O número de WhatsApp da Dona Bolo (Ajustar com o número real)
    const WHATSAPP_NUMBER = "5599999999999"; 

    // Seleciona todos os botões de pedido
    const orderButtons = document.querySelectorAll('.btn-produto');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Impede que o link padrão (#) recarregue a página

            // Coleta os dados dos atributos de dados (data-)
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');
            
            // Monta a mensagem estruturada (com preço já aceito!)
            const messageText = `Olá, Dona Bolo! Gostaria de encomendar o ${productName}, conforme o preço de R$ ${productPrice.replace('.', ',')}. Podemos agendar a entrega?`;

            // Codifica a mensagem para o URL
            const encodedMessage = encodeURIComponent(messageText);

            // Constrói o link final de conversão
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // Abre o WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    });
});
