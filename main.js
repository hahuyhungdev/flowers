onload = () => {
  document.body.classList.remove("container");
};
// Hiệu ứng hoa sen nở
gsap.set(".lotus-petal", { scale: 0, transformOrigin: "bottom center" });
gsap.to(".lotus-petal", {
  scale: 1,
  duration: 2,
  stagger: 0.2,
  ease: "power2.out",
});

// Hiệu ứng trái tim bay lên
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  document.body.appendChild(heart);

  gsap.to(heart, {
    y: -window.innerHeight * (Math.random() * 0.5 + 0.5),
    x: Math.random() * 100 - 50,
    scale: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360,
    duration: Math.random() * 4 + 4,
    ease: "power1.out",
    onComplete: () => heart.remove(),
  });
}

// Tạo trái tim mỗi 500ms
setInterval(createHeart, 500);
const sparkles = document.querySelectorAll(".sparkle");
sparkles.forEach((sparkle) => {
  gsap.to(sparkle, {
    opacity: Math.random() * 0.5 + 0.5,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 2 + 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
// Hiệu ứng xuất hiện cho dòng chữ
gsap.from(".message", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
  delay: 1,
});

// Hiệu ứng cho các bông hoa hiện có
gsap.to(".flower", {
  y: -10,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  stagger: {
    each: 0.5,
    from: "random",
  },
});

// CSS remains the same as in the previous example

// Call the function when the page loads
window.addEventListener("load", createLoveAnimation);

// Add this to your CSS
/*
.love-container {
  background-color: black;
}
.love-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #ff69b4;
  border-radius: 50%;
}
.love-heart {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ff69b4;
  transform: rotate(45deg);
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
}
.love-heart:before,
.love-heart:after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ff69b4;
  border-radius: 50%;
}
.love-heart:before {
  left: -20px;
}
.love-heart:after {
  top: -20px;
}
*/

// Call the function when the page loads
window.addEventListener("load", createLoveAnimation);
