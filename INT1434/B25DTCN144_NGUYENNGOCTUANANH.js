document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    const studentName = "Zimii";
    alert(`Hôm nay là ngày ${day}/${month}/${year}, Chào mừng bạn đến với trang của ${studentName}!`);

    function updateClock() {
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');
        
        const clockElement = document.getElementById("digital-clock");
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    const avatarWrapper = document.querySelector(".avatar-wrapper");
    const avatarImg = document.getElementById("avatar-img");
    const imageModal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");

    if (avatarWrapper && avatarImg && imageModal && modalImg && closeModal) {
        avatarWrapper.addEventListener("click", () => {
            imageModal.classList.remove("hidden");
            modalImg.src = avatarImg.src;
        });

        closeModal.addEventListener("click", () => {
            imageModal.classList.add("hidden");
        });

        imageModal.addEventListener("click", (event) => {
            if (event.target === imageModal) {
                imageModal.classList.add("hidden");
            }
        });
    }

    const toggleBtn = document.getElementById("toggle-hobbies-btn");
    const moreHobbies = document.getElementById("more-hobbies");

    if (toggleBtn && moreHobbies) {
        toggleBtn.addEventListener("click", () => {
            moreHobbies.classList.toggle("hidden");
            if (moreHobbies.classList.contains("hidden")) {
                toggleBtn.textContent = "Xem thêm";
            } else {
                toggleBtn.textContent = "Thu gọn";
            }
        });
    }

    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
});