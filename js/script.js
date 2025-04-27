// Password
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "aminpalingserius") {
      document.getElementById("passwordPage").classList.add("hidden");
      document.getElementById("mainContent").classList.remove("hidden");
      document.getElementById("errorMsg").classList.add("hidden");
    } else {
      document.getElementById("errorMsg").classList.remove("hidden");
    }
  }
  
  // Typing Text
  const textToType = "Haii Raa, selamat datang di web yang absurd ini. Kamu selalu bisa kesini kok ketika kamu sedang merasa sedih. Biarkan web ini menjadi teman kamu kapanpun dan dimanapun hwhwhw. Mungkin kamu bertanya, mengapa aku membuat web seperti ini? Jawabannya sederhana Raa, aku tidak ingin orang yang aku cinta merasa kesepian. Dan aku hanya ingin mengusahakan itu dengan hal yang aku bisa, mengusahakan wanita yang aku cinta.";
  let typingIndex = 0;
  const typingSpeed = 50;
  
  function typeText() {
    if (typingIndex < textToType.length) {
      document.getElementById("typingText").innerHTML += textToType.charAt(typingIndex);
      typingIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeText();
  });
  
  // Show Wheel Page
  function showWheelPage() {
    document.getElementById("wheelPage").classList.remove("hidden");
    window.scrollTo({
      top: document.getElementById("wheelPage").offsetTop,
      behavior: "smooth"
    });
  }
  
  // Wheel
  const sectors = [
    { label: "🍕", color: "#FFD1DC" },
    { label: "🍦", color: "#FFB6B9" },
    { label: "🍭", color: "#FFC3A0" },
    { label: "🫂 Hug", color: "#FF6F91" },
    { label: "🍰", color: "#FFC09F" },
    { label: "🎁", color: "#FF9AA2" }
  ];
  
  const wheelCanvas = document.getElementById("wheel");
  const ctx = wheelCanvas.getContext("2d");
  const totalSectors = sectors.length;
  const arcSize = (2 * Math.PI) / totalSectors;
  
  function drawWheel() {
    for (let i = 0; i < totalSectors; i++) {
      const angle = i * arcSize;
      ctx.beginPath();
      ctx.fillStyle = sectors[i].color;
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, angle, angle + arcSize);
      ctx.fill();
      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate(angle + arcSize / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(sectors[i].label, 130, 10);
      ctx.restore();
    }
  }
  drawWheel();
  
  function spinWheel() {
    const randomAngle = (5 * 2 * Math.PI) + (Math.random() * 2 * Math.PI);
    let start = null;
    const duration = 5000; // 5 seconds
  
    function animate(time) {
      if (!start) start = time;
      const progress = (time - start) / duration;
      const angle = randomAngle * progress;
  
      ctx.clearRect(0, 0, 300, 300);
      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate(angle);
      ctx.translate(-150, -150);
      drawWheel();
      ctx.restore();
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        document.getElementById("wheelResult").innerText = "Kamu mendapatkan pelukan dari aku! 🫂";
        document.getElementById("hugButton").classList.remove("hidden");
      }
    }
    requestAnimationFrame(animate);
  }
  
    // Show Album + Bunga Jatuh
    function showAlbum() {
    document.getElementById("albumPage").classList.remove("hidden");
    window.scrollTo({
      top: document.getElementById("albumPage").offsetTop,
      behavior: "smooth"
    });
    startFallingFlowers(); // <- trigger bunga jatuh saat masuk album
  }
  
  // Bunga Jatuh
  function startFallingFlowers() {
    for (let i = 0; i < 15; i++) {
      createFlower();
    }
  }
  
  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
  
  
  // Photo Preview
  function openPreview(src) {
    document.getElementById("previewImage").src = src;
    document.getElementById("photoPreview").classList.remove("hidden");
  }
  
  function closePreview() {
    document.getElementById("photoPreview").classList.add("hidden");
  }
  