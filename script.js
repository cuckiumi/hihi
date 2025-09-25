document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  card.addEventListener("click", () => {
    card.classList.toggle("open");

    // Nếu thiệp được mở thì tạo hiệu ứng tim ❤️
    if (card.classList.contains("open")) {
      for (let i = 0; i < 15; i++) {
        createHeart();
      }
    }
  });

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️"; // có thể đổi thành 🎉 hoặc 💖
    document.body.appendChild(heart);

    // Vị trí ngẫu nhiên ngang
    heart.style.left = Math.random() * window.innerWidth + "px";
    // Xuất hiện gần cuối màn hình
    heart.style.top = window.innerHeight - 30 + "px";

    // Xóa sau 3 giây
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
});
