const types = [
  { emoji: "🍫", name: "Dark Chocolate", desc: "Rich in cocoa (70–99%), intense flavour, and packed with antioxidants." },
  { emoji: "🍬", name: "Milk Chocolate", desc: "Creamy and sweet, made with milk powder and lower cocoa content." },
  { emoji: "⬜", name: "White Chocolate", desc: "Made from cocoa butter, sugar, and milk — no cocoa solids." },
  { emoji: "🌶️", name: "Ruby Chocolate", desc: "A naturally pink chocolate with a fruity, berry-like taste." },
];

const container = document.getElementById("cards");

types.forEach(({ emoji, name, desc }) => {
  container.innerHTML += `
    <div class="card">
      <div class="emoji">${emoji}</div>
      <h3>${name}</h3>
      <p>${desc}</p>
    </div>`;
});
