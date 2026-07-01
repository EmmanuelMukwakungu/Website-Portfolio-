// Hamburger Menu
function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.transform = "translateY(0)";
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.transform = "translateY(-500px)";
}

const dropdownLinks = document.querySelectorAll(".dropdown .links a");
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    cancel();
  });
});

// Typewriter Effect
const words = ["Game Designer", "Game Developer", "Web Designer", "Basketball Player"];
const typewriterSpan = document.querySelector(".typewriter-text span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Remove a character
    typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Add a character
    typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500); // pause before deleting
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // move to next word, loop back
    setTimeout(type, 400); // pause before typing next word
    return;
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(type, speed);
}

// Contact Modal
function openModal() {
  document.getElementById("contactModal").classList.add("active");
}

function closeModal() {
  document.getElementById("contactModal").classList.remove("active");
}

// Close modal when clicking outside of it
document.getElementById("contactModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

// Start effect
type();