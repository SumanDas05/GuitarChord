// ===== CHORD DATA STRUCTURE =====
//
// Guitar strings are numbered 6 to 1:
// 6 = low E (thickest string)  5 = A   4 = D   3 = G   2 = B   1 = high e (thinnest string)
//
// For each string we store:
//   fret   -> which fret to press ("x" = don't play this string, 0 = play it open, no finger needed)
//   finger -> which finger presses that fret (0 = no finger needed, because it's open or muted)
//
// finger numbers: 1 = index, 2 = middle, 3 = ring, 4 = pinky

const chords = {

  C: {
    name: "C",
    type: "major",
    difficulty: "beginner",
    strings: [
      { string: 6, fret: "x", finger: 0 },
      { string: 5, fret: 3,   finger: 3 },
      { string: 4, fret: 2,   finger: 2 },
      { string: 3, fret: 0,   finger: 0 },
      { string: 2, fret: 1,   finger: 1 },
      { string: 1, fret: 0,   finger: 0 }
    ],
    barre: null,
    alternativeShapes: []
  },

  G: {
    name: "G",
    type: "major",
    difficulty: "beginner",
    strings: [
      { string: 6, fret: 3, finger: 2 },
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 0, finger: 0 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 3, finger: 3 }
    ],
    barre: null,
    alternativeShapes: []
  },

  Am: {
    name: "Am",
    type: "minor",
    difficulty: "beginner",
    strings: [
      { string: 6, fret: "x", finger: 0 },
      { string: 5, fret: 0,   finger: 0 },
      { string: 4, fret: 2,   finger: 2 },
      { string: 3, fret: 2,   finger: 3 },
      { string: 2, fret: 1,   finger: 1 },
      { string: 1, fret: 0,   finger: 0 }
    ],
    barre: null,
    alternativeShapes: []
  },

  Em: {
    name: "Em",
    type: "minor",
    difficulty: "beginner",
    strings: [
      { string: 6, fret: 0, finger: 0 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 3, fret: 0, finger: 0 },
      { string: 2, fret: 0, finger: 0 },
      { string: 1, fret: 0, finger: 0 }
    ],
    barre: null,
    alternativeShapes: []
  },

  D: {
    name: "D",
    type: "major",
    difficulty: "beginner",
    strings: [
      { string: 6, fret: "x", finger: 0 },
      { string: 5, fret: "x", finger: 0 },
      { string: 4, fret: 0,   finger: 0 },
      { string: 3, fret: 2,   finger: 1 },
      { string: 2, fret: 3,   finger: 3 },
      { string: 1, fret: 2,   finger: 2 }
    ],
    barre: null,
    alternativeShapes: []
  },

  F: {
    name: "F",
    type: "major",
    difficulty: "intermediate",
    strings: [
      { string: 6, fret: 1, finger: 1 },
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 3, finger: 4 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 1, finger: 1 }
    ],
    barre: {
      fret: 1,
      fromString: 6,
      toString: 1,
      finger: 1
    },
    alternativeShapes: []
  }

};