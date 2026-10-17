// Mengatur Tema Dark/Light Mode
const htmlElement = document.documentElement;
const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

function toggleTheme() {
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Event listener untuk tombol toggle tema
themeToggleDesktop.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);

// Cek preferensi tema sebelumnya dari localStorage
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}

// Hamburger Menu Toggle (Mobile)
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  } else {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
  }
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);

// Tutup hamburger menu saat salah satu link navigasi diklik
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
      toggleMobileMenu();
    }
  });
});

// Fitur Ubah Teks Dinamis
const changeTextBtn = document.getElementById("change-text-btn");
const greetingText = document.getElementById("greeting-text");
const bioText = document.getElementById("bio-text");

// Data variasi teks
const textOptions = [
  {
    greeting:
      'Halo, Saya <span class="text-brand-600 dark:text-brand-400">John Doe</span> 👋',
    bio: "Saya adalah seorang pengembang web pemula yang bersemangat dalam mempelajari teknologi front-end modern. Suka menciptakan tampilan antarmuka web yang rapi, responsif, dan interaktif menggunakan HTML, CSS, dan JavaScript.",
  },
  {
    greeting:
      'Selamat Datang! Saya <span class="text-brand-600 dark:text-brand-400">John Doe</span> 🚀',
    bio: "Fokus utama saya saat ini adalah membangun antarmuka pengguna yang bersih, ramah pengguna, serta responsif di semua jenis layar perangkat, mulai dari smartphone hingga laptop.",
  },
  {
    greeting:
      'Nice to meet you! Saya <span class="text-brand-600 dark:text-brand-400">John Doe</span> 💻',
    bio: "Selain memrogram, saya juga tertarik dengan dunia UI/UX design dan terus berinovasi dalam membuat proyek web yang estetik dan dapat diandalkan.",
  },
];

let currentIndex = 0;

changeTextBtn.addEventListener("click", () => {
  // Efek Fade Out
  greetingText.style.opacity = "0";
  bioText.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % textOptions.length;
    greetingText.innerHTML = textOptions[currentIndex].greeting;
    bioText.textContent = textOptions[currentIndex].bio;

    // Efek Fade In
    greetingText.style.opacity = "1";
    bioText.style.opacity = "1";
  }, 200);
});
