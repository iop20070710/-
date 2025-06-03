const gameData = [
  {
    image: "/pic/Game01.png",
    title: "月藍傳奇Remake外傳－百草的願望",
    tags: ["售價199元", "有試玩版"],
    link: "https://example.com/game1"
  },
  {
    image: "/pic/Game02.png",
    title: "月藍傳奇Remake",
    tags: ["售價499元", "無試玩版", "合作遊戲"],
    link: "https://example.com/game2"
  },
  {
    image: "/pic/Game03.png",
    title: "謳歌的聖女",
    tags: ["免費遊戲"],
    link: "https://example.com/game3"
  },
  {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
  {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
  {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
  {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
  {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
    {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
    {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
    {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
    {
    image: "/pic/Game04.png",
    title: "敬請期待",
    tags: ["？？？"],
    link: null
  },
];

let gamePage = 1;
const gamesPerPage = 6;

function renderGameCards() {
  const wrapper = document.getElementById("game-wrapper");
  wrapper.innerHTML = "";

  const start = (gamePage - 1) * gamesPerPage;
  const end = start + gamesPerPage;
  const pageData = gameData.slice(start, end);

  pageData.forEach(game => {
    const card = document.createElement(game.link ? "a" : "div");
    card.className = "game-card";
    if (game.link) card.href = game.link;
    if (!game.link) card.style.cursor = "default";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <div class="tags">${game.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    `;
    wrapper.appendChild(card);
  });

  renderGamePagination();
}

function renderGamePagination() {
  let pagination = document.getElementById("game-pagination");
  if (!pagination) {
    pagination = document.createElement("div");
    pagination.id = "game-pagination";
    pagination.className = "pagination";
    document.querySelector("#download-section").appendChild(pagination);
  }
  pagination.innerHTML = "";

  const totalPages = Math.ceil(gameData.length / gamesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (i === gamePage ? " active" : "");
    btn.textContent = i;
    btn.addEventListener("click", () => {
      gamePage = i;
      renderGameCards();
    });
    pagination.appendChild(btn);
  }
}

renderGameCards();