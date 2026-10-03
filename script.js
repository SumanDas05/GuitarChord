// ===== MOBILE NAVIGATION TOGGLE =====
// ===== TEST: confirm chord data loaded correctly =====
console.log("Chord data loaded:", chords);
console.log("Example — C major chord object:", chords.C);
// "Select" the two elements we need: the button and the menu itself
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
// ===== RENDER CHORD LIBRARY =====

// Find the empty container in the HTML where chord cards will go
const chordGrid = document.getElementById("chordGrid");

// This function builds one chord card's HTML and returns it as text
function createChordCardHTML(chordKey) {
  const chord = chords[chordKey];
  return `
    <div class="chord-card" data-chord="${chordKey}">
      <h3>${chord.name}</h3>
      <span class="chord-type">${chord.type}</span>
    </div>
  `;
}

// This function loops through every chord in our data and renders them all
function renderChordLibrary() {
  let allCardsHTML = "";

  // Object.keys(chords) turns {C: {...}, G: {...}} into ["C", "G", ...]
  Object.keys(chords).forEach((chordKey) => {
    allCardsHTML += createChordCardHTML(chordKey);
  });

  chordGrid.innerHTML = allCardsHTML;
}

// Run it once, immediately, when the page loads
renderChordLibrary();

// ===== CHORD CARD CLICK HANDLING =====

chordGrid.addEventListener("click", (event) => {
  // .closest() finds the nearest parent element matching ".chord-card"
  // this matters because the click might land on the <h3> or <span> inside the card
  const card = event.target.closest(".chord-card");
  if (!card) return; // clicked outside any card — do nothing

  const chordKey = card.dataset.chord; // reads the data-chord="..." attribute
  console.log("You selected:", chords[chordKey]);
});

// When the hamburger button is clicked, toggle a CSS class on the menu
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  hamburgerBtn.classList.toggle("open");
});

console.log("GuitarChord app.js loaded successfully ✅");