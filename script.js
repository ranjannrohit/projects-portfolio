const nameEl = document.querySelector(".hero-name");
const glowSlider = document.getElementById("glowRange");

/* Mouse + Touch glow sensitivity */
document.addEventListener("mousemove", updateGlow);
document.addEventListener("touchmove", (e) => {
    updateGlow(e.touches[0]);
});

function updateGlow(e) {
    const x = (window.innerWidth / 2 - e.clientX) / 18;
    const y = (window.innerHeight / 2 - e.clientY) / 18;
    const glow = glowSlider.value;

    nameEl.style.textShadow = `
        ${x}px ${y}px ${glow}px rgba(255,0,128,0.7),
        ${-x}px ${-y}px ${glow * 1.2}px rgba(138,43,226,0.6)
    `;
}

/* Random icon start */
document.querySelectorAll(".icon").forEach(icon => {
    icon.style.top = Math.random() * 100 + "vh";
});
/* Auto update year in footer */
document.getElementById("year").textContent = new Date().getFullYear();
