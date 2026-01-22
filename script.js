// script.js

// ============================================================================
// GAME DATA - EASILY EXPANDABLE STRUCTURE
// ============================================================================

// This is where you add new genres and questions
// To add a new genre:
// 1. Add a new entry to gameData with name, color, and questions
// 2. Add questions for each difficulty level (easy, medium, hard)
// 3. For music questions, use answerType: "song", "artist", or "both"

const gameData = {
  music: {
    name: "Music",
    color: "#6b46c1",
    questions: {
      easy: [
        {
          emojis: ["🪩", "🕺", "🧟‍♂️", "🧟‍♀️", "🧟", "🧟‍♂️"],
          answer: "Thriller",
          artist: "Michael Jackson",
          hints: [
            "This song features zombies and is by the King of Pop",
            "The music video is a short horror film",
            "The song has a famous spoken word rap section by Vincent Price"
          ],
          answerType: "song"
        },
        {
          emojis: ["👱‍♀️", "💥", "🪟", "🔫", "🪩", "🕺", "🕵️‍♂️"],
          answer: "Smooth Criminal",
          artist: "Michael Jackson",
          hints: [
            "This song asks 'Annie, are you okay?'",
            "Michael Jackson performs the anti-gravity lean in this song's music video",
            "The lyrics describe a woman being attacked in her apartment"
          ],
          answerType: "song"
        },
        {
          emojis: ["🚽", "😵", "💔"],
          answer: "Elvis Presley",
          artist: "",
          hints: [
            "This is how 'The King' died",
            "He was found in his Graceland bathroom",
            "His full name was Elvis Aaron Presley"
          ],
          answerType: "artist"
        },
        {
          emojis: ["🎷", "🌃", "👣", "💔", "🤫", "🌉"],
          answer: "Careless Whisper",
          artist: "George Michael",
          hints: [
            "The lyrics ask 'Can guilty feet have rhythm?'",
            "The singer says 'I'm never gonna dance again'",
            "This song features a famous saxophone riff"
          ],
          answerType: "song"
        },
        {
          emojis: ["🎄", "🎁", "🧔🏻", "📯", "🎹", "🏃‍♀️", "❤️", "🔥"],
          answer: "All I Want For Christmas Is You",
          artist: "Mariah Carey",
          hints: [
            "She sings 'I don't want a lot for Christmas'",
            "This song earns millions every holiday season",
            "It was released in 1994 on her Merry Christmas album"
          ],
          answerType: "song"
        },
        {
          emojis: ["🤠", "🌈", "🐎", "🚗", "🛣️", "⚡", "🎸"],
          answer: "Old Town Road",
          artist: "Lil Nas X",
          hints: [
            "The lyrics say 'Can't nobody tell me nothin''",
            "This song features Billy Ray Cyrus",
            "It broke the record for longest-running #1 on Billboard Hot 100"
          ],
          answerType: "song"
        },
        {
          emojis: ["👑", "😭", "🌎"],
          answer: "We Are the World",
          artist: "USA for Africa",
          hints: [
            "This charity song was written by Michael Jackson and Lionel Richie",
            "It features dozens of famous artists singing together",
            "The lyrics begin 'There comes a time when we heed a certain call'"
          ],
          answerType: "song"
        },
        {
          emojis: ["⚡", "🎸", "🏃", "🚫"],
          answer: "AC/DC",
          artist: "",
          hints: [
            "This Australian rock band has an electrifying name",
            "Their famous songs include 'Highway to Hell' and 'Back in Black'",
            "The band's name refers to alternating current/direct current electricity"
          ],
          answerType: "artist"
        },
        {
          emojis: ["🕺", "🌙", "💃", "⭐"],
          answer: "Dancing Queen",
          artist: "ABBA",
          hints: [
            "This disco hit is from the Swedish supergroup",
            "The lyrics describe a 'young and sweet, only seventeen' girl",
            "It was featured in the musical 'Mamma Mia!'"
          ],
          answerType: "song"
        },
        {
          emojis: ["🚀", "👨", "🌕", "🌌"],
          answer: "Rocket Man",
          artist: "Elton John",
          hints: [
            "This song describes an astronaut missing Earth",
            "The lyrics say 'I'm not the man they think I am at home'",
            "Elton John performed this at Princess Diana's funeral"
          ],
          answerType: "song"
        },
        {
          emojis: ["🎸", "⚫", "💀", "🎵"],
          answer: "Back in Black",
          artist: "AC/DC",
          hints: [
            "This hard rock anthem starts with iconic guitar riffs",
            "It was written as a tribute to their deceased lead singer Bon Scott",
            "The album cover is completely black"
          ],
          answerType: "song"
        },
        {
          emojis: ["👨", "🎸", "💔", "🌹"],
          answer: "Guns N' Roses",
          artist: "",
          hints: [
            "This hard rock band's name combines weapons and flowers",
            "Their debut album is 'Appetite for Destruction'",
            "Lead singers are Axl Rose and Slash is the guitarist"
          ],
          answerType: "artist"
        },
        {
          emojis: ["🚫", "😭", "💪", "🔄"],
          answer: "Stronger",
          artist: "Kanye West",
          hints: [
            "The lyrics sample 'Harder, Better, Faster, Stronger' by Daft Punk",
            "Kanye sings 'That that don't kill me, can only make me stronger'",
            "This song is about resilience after a breakup"
          ],
          answerType: "song"
        },
        {
          emojis: ["👑", "👑", "👑", "🎤"],
          answer: "Queen",
          artist: "",
          hints: [
            "This British rock band's lead singer was Freddie Mercury",
            "Famous songs include 'Bohemian Rhapsody' and 'We Will Rock You'",
            "The band name means female monarch"
          ],
          answerType: "artist"
        },
        {
          emojis: ["🌊", "💃", "🎶", "🌅"],
          answer: "Macarena",
          artist: "Los Del Rio",
          hints: [
            "This dance song had everyone doing the same moves in the 90s",
            "The lyrics tell a story about a woman named Macarena",
            "The dance involves specific hand motions and hip movements"
          ],
          answerType: "song"
        }
      ],
      medium: [
        {
          emojis: ["👶", "🌟", "💎"],
          answer: "Diamonds",
          artist: "Rihanna",
          hints: [
            "This song compares someone to precious stones in the sky",
            "The lyrics say 'Shine bright like a diamond'",
            "It was a worldwide hit in 2012"
          ],
          answerType: "song"
        },
        {
          emojis: ["🕺", "☀️", "😎"],
          answer: "Walking on Sunshine",
          artist: "Katrina and the Waves",
          hints: [
            "This upbeat song is about feeling extremely happy",
            "It was featured in many movies and commercials",
            "The singer feels like she's walking on sunshine"
          ],
          answerType: "song"
        }
      ],
      hard: [
        {
          emojis: ["🏨", "💀", "🌴"],
          answer: "Hotel California",
          artist: "Eagles",
          hints: [
            "This song describes a mysterious hotel you can check out of but never leave",
            "It's often interpreted as a metaphor for the excesses of American culture",
            "The guitar solo at the end is famous"
          ],
          answerType: "song"
        },
        {
          emojis: ["👑", "😔", "🇬🇧"],
          answer: "God Save the Queen",
          artist: "Sex Pistols",
          hints: [
            "This punk song was controversial for its criticism of the monarchy",
            "It was released during Queen Elizabeth II's Silver Jubilee",
            "The song was banned by the BBC"
          ],
          answerType: "both"
        }
      ]
    }
  },
  cartoons: {
    name: "Cartoons",
    color: "#FF5722",
    questions: {
      easy: [
        {
          emojis: ["🐀", "🐢", "🐢", "🐢", "🐢"],
          answer: "Teenage Mutant Ninja Turtles",
          artist: "",
          hints: [
            "These heroes are named after Renaissance artists",
            "They love pizza and fight crime in the sewers",
            "Their sensei is a rat named Splinter"
          ],
          answerType: "title"
        },
        {
          emojis: ["🟡", "🌀", "📦"],
          answer: "SpongeBob SquarePants",
          artist: "",
          hints: [
            "This character lives in a pineapple under the sea",
            "He works as a fry cook at the Krusty Krab",
            "His best friend is a starfish named Patrick"
          ],
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["🦆", "💰", "🏦"],
          answer: "Scrooge McDuck",
          artist: "",
          hints: [
            "This character is known for swimming in his money",
            "He is Donald Duck's wealthy uncle",
            "He first appeared in 1947"
          ],
          answerType: "character"
        }
      ],
      hard: [
        {
          emojis: ["🦊", "🐶", "🔫", "🌵"],
          answer: "Cowboy Bebop",
          artist: "",
          hints: [
            "This anime follows bounty hunters in space",
            "The main character is Spike Spiegel",
            "The show is known for its jazz soundtrack"
          ],
          answerType: "title"
        }
      ]
    }
  },
  videogames: {
    name: "Video Games",
    color: "#4CAF50",
    questions: {
      easy: [
        {
          emojis: ["🎮", "🐉", "⚔️", "🧝"],
          answer: "The Legend of Zelda",
          artist: "",
          hints: [
            "This game features a hero named Link saving Princess Zelda",
            "The main character wears a green tunic and cap",
            "A golden triangle called the Triforce is central to the story"
          ],
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["👦", "👧", "⚡", "🧙"],
          answer: "Harry Potter",
          artist: "",
          hints: [
            "This game is based on the wizard who lived",
            "The main character has a lightning scar on his forehead",
            "He attends Hogwarts School of Witchcraft and Wizardry"
          ],
          answerType: "title"
        }
      ],
      hard: [
        {
          emojis: ["🌙", "👨", "🐺"],
          answer: "Bloodborne",
          artist: "",
          hints: [
            "This FromSoftware game is set in a Gothic, Victorian-inspired world",
            "Players hunt beasts in the city of Yharnam",
            "The game is known for its difficulty and lovecraftian themes"
          ],
          answerType: "title"
        }
      ]
    }
  },
  movies: {
    name: "Movies",
    color: "#9C27B0",
    questions: {
      easy: [
        {
          emojis: ["🦁", "👑", "🌅"],
          answer: "The Lion King",
          artist: "",
          hints: [
            "This Disney movie features a young lion prince",
            "The villain is Scar, Simba's uncle",
            "The song 'Circle of Life' opens the film"
          ],
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["👨", "⚡", "🔨"],
          answer: "Thor",
          artist: "",
          hints: [
            "This Marvel superhero is based on Norse mythology",
            "He is the God of Thunder from Asgard",
            "His weapon is Mjolnir, a magical hammer"
          ],
          answerType: "title"
        }
      ],
      hard: [
        {
          emojis: ["👦", "🏃", "🌪️"],
          answer: "Forrest Gump",
          artist: "",
          hints: [
            "This movie follows a man with a low IQ who witnesses historical events",
            "He says 'Life is like a box of chocolates'",
            "He becomes a ping pong champion and shrimp boat captain"
          ],
          answerType: "title"
        }
      ]
    }
  },
  food: {
    name: "Food",
    color: "#FF9800",
    questions: {
      easy: [
        {
          emojis: ["🍕", "🇮🇹"],
          answer: "Pizza",
          artist: "",
          hints: [
            "This Italian dish is a worldwide favorite",
            "It typically has a dough base, tomato sauce, and cheese",
            "Margherita is a classic variety"
          ],
          answerType: "dish"
        }
      ],
      medium: [
        {
          emojis: ["🍣", "🇯🇵"],
          answer: "Sushi",
          artist: "",
          hints: [
            "This Japanese dish features vinegared rice and seafood",
            "It often includes raw fish like tuna or salmon",
            "Wasabi and soy sauce are common accompaniments"
          ],
          answerType: "dish"
        }
      ],
      hard: [
        {
          emojis: ["🥘", "🇪🇸", "🥘"],
          answer: "Paella",
          artist: "",
          hints: [
            "This Spanish rice dish is often made with seafood or meat",
            "It originates from Valencia",
            "Saffron gives it its distinctive yellow color"
          ],
          answerType: "dish"
        }
      ]
    }
  },
  books: {
    name: "Books",
    color: "#795548",
    questions: {
      easy: [
        {
          emojis: ["👦", "🧙", "⚡"],
          answer: "Harry Potter",
          artist: "J.K. Rowling",
          hints: [
            "This book series features a young wizard at Hogwarts",
            "The main villain is Lord Voldemort",
            "The first book is 'The Philosopher's Stone'"
          ],
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["🐭", "👨", "🏰"],
          answer: "Mickey Mouse",
          artist: "Walt Disney",
          hints: [
            "This iconic cartoon character was created in 1928",
            "He has a girlfriend named Minnie Mouse",
            "He first appeared in 'Steamboat Willie'"
          ],
          answerType: "character"
        }
      ],
      hard: [
        {
          emojis: ["👹", "🔔", "🏰"],
          answer: "The Hunchback of Notre Dame",
          artist: "Victor Hugo",
          hints: [
            "This novel is set in medieval Paris and features Quasimodo",
            "The story takes place in and around Notre Dame Cathedral",
            "Esmeralda is the gypsy girl Quasimodo loves"
          ],
          answerType: "title"
        }
      ]
    }
  }
};

// ============================================================================
// GAME STATE & SETTINGS
// ============================================================================

let gameState = {
  currentGenre: null,
  currentDifficulty: "easy", // Default difficulty
  currentQuestionIndex: 0,
  score: 0,
  hintsUsed: 0,
  totalHints: 3,
  skippedQuestions: 0,
  currentQuestions: [],
  pointsPerQuestion: 10,
  isAnswerRevealed: false,
  currentQuestionHints: 0 // Track hints used for current question
};

let gameSettings = {
  soundEnabled: true,
  darkMode: false,
  difficulty: "easy"
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const welcomeScreen = document.getElementById('welcomeScreen');
const gameScreen = document.getElementById('gameScreen');
const resultsScreen = document.getElementById('resultsScreen');
const gameStats = document.getElementById('gameStats');

// Settings elements
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettings = document.getElementById('closeSettings');
const difficultyOptions = document.querySelectorAll('.difficulty-option');
const soundToggle = document.getElementById('soundToggle');
const themeToggle = document.getElementById('themeToggle');
const resetSettingsBtn = document.getElementById('resetSettings');

// Genre selection elements
const mainGenreButtons = document.getElementById('mainGenreButtons');
const additionalGenreButtons = document.getElementById('additionalGenreButtons');
const showMoreGenres = document.getElementById('showMoreGenres');
const additionalGenres = document.getElementById('additionalGenres');

// Game elements
const emojiDisplay = document.getElementById('emojiDisplay');
const questionCategory = document.getElementById('questionCategory');
const currentQuestion = document.getElementById('currentQuestion');
const questionPoints = document.getElementById('questionPoints');
const answerTypeHint = document.getElementById('answerTypeHint');
const answerInput = document.getElementById('answerInput');
const submitButton = document.getElementById('submitAnswer');
const hintButton = document.getElementById('getHint');
const hintText = document.getElementById('hintText');
const hintsLeft = document.getElementById('hintsLeft');
const skipButton = document.getElementById('skipQuestion');
const feedbackMessage = document.getElementById('feedbackMessage');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const feedbackEmoji = document.getElementById('feedbackEmoji');
const feedbackButtons = document.getElementById('feedbackButtons');
const questionCounter = document.getElementById('questionCounter');
const scoreCounter = document.getElementById('scoreCounter');
const hintCounter = document.getElementById('hintCounter');
const finalScore = document.getElementById('finalScore');
const correctAnswers = document.getElementById('correctAnswers');
const skippedQuestions = document.getElementById('skippedQuestions');
const hintsUsed = document.getElementById('hintsUsed');
const finalDifficulty = document.getElementById('finalDifficulty');
const resultsMessage = document.getElementById('resultsMessage');
const playAgainButton = document.getElementById('playAgain');
const changeGenreButton = document.getElementById('changeGenre');
const quitButton = document.getElementById('quitGame');
const resetButton = document.getElementById('resetGame');

// Audio elements
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const clickSound = document.getElementById('clickSound');
const skipSound = document.getElementById('skipSound');
const hintSound = document.getElementById('hintSound');

// ============================================================================
// INITIALIZATION FUNCTIONS
// ============================================================================

/**
 * Initialize the game when the page loads
 */
function init() {
  loadSettings();
  setupEventListeners();
  setupGenres();
  updateUIFromSettings();
}

/**
 * Load settings from localStorage or use defaults
 */
function loadSettings() {
  const savedSettings = localStorage.getItem('emojiCharadesSettings');
  if (savedSettings) {
    gameSettings = JSON.parse(savedSettings);
  }
}

/**
 * Save current settings to localStorage
 */
function saveSettings() {
  localStorage.setItem('emojiCharadesSettings', JSON.stringify(gameSettings));
}

/**
 * Set up all event listeners for the game
 */
function setupEventListeners() {
  // Settings menu
  settingsBtn.addEventListener('click', openSettingsMenu);
  closeSettings.addEventListener('click', closeSettingsMenu);
  settingsOverlay.addEventListener('click', closeSettingsMenu);
  
  // Difficulty options
  difficultyOptions.forEach(option => {
    option.addEventListener('click', () => {
      const difficulty = option.getAttribute('data-difficulty');
      setDifficulty(difficulty);
    });
  });
  
  // Toggles
  soundToggle.addEventListener('change', toggleSound);
  themeToggle.addEventListener('change', toggleTheme);
  resetSettingsBtn.addEventListener('click', resetSettings);
  
  // Genre selection
  showMoreGenres.addEventListener('click', toggleMoreGenres);
  
  // Game actions
  submitButton.addEventListener('click', checkAnswer);
  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  });
  
  hintButton.addEventListener('click', giveHint);
  skipButton.addEventListener('click', skipQuestion);
  playAgainButton.addEventListener('click', () => startGame(gameState.currentGenre));
  changeGenreButton.addEventListener('click', goBackToGenreSelection);
  quitButton.addEventListener('click', quitGame);
  resetButton.addEventListener('click', resetGame);
  
  // Play click sound for all buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      playSound(clickSound);
    });
  });
}

/**
 * Set up the genre buttons dynamically
 */
function setupGenres() {
  const genres = Object.keys(gameData);
  
  // Clear any existing buttons
  mainGenreButtons.innerHTML = '';
  additionalGenreButtons.innerHTML = '';
  
  // Show first 3 genres in main section, rest in additional section
  genres.forEach((genreKey, index) => {
    const genre = gameData[genreKey];
    const genreButton = createGenreButton(genreKey, genre);
    
    if (index < 3) {
      mainGenreButtons.appendChild(genreButton);
    } else {
      additionalGenreButtons.appendChild(genreButton);
    }
  });
  
  // Hide "More Genres" button if there are no additional genres
  if (genres.length <= 3) {
    showMoreGenres.style.display = 'none';
  }
}

/**
 * Create a genre button element
 */
function createGenreButton(genreKey, genre) {
  const button = document.createElement('button');
  button.className = 'genre-btn';
  button.setAttribute('data-genre', genreKey);
  
  button.innerHTML = `
    <i class="fas fa-${getGenreIcon(genreKey)}"></i>
    <span>${genre.name}</span>
    <span class="genre-desc">${getGenreDescription(genreKey)}</span>
  `;
  
  button.addEventListener('click', () => {
    // Check if difficulty is selected (should be by default)
    if (!gameState.currentDifficulty) {
      gameState.currentDifficulty = "easy";
      updateDifficultyUI();
    }
    
    startGame(genreKey);
  });
  
  return button;
}

/**
 * Get icon for genre
 */
function getGenreIcon(genreKey) {
  const icons = {
    music: 'music',
    cartoons: 'film',
    videogames: 'gamepad',
    movies: 'video',
    food: 'utensils',
    books: 'book'
  };
  
  return icons[genreKey] || 'question-circle';
}

/**
 * Get description for genre
 */
function getGenreDescription(genreKey) {
  const descriptions = {
    music: 'Songs & Artists',
    cartoons: 'TV Shows & Movies',
    videogames: 'Games & Characters',
    movies: 'Films & Actors',
    food: 'Dishes & Cuisine',
    books: 'Novels & Authors'
  };
  
  return descriptions[genreKey] || 'Emoji Puzzles';
}

// ============================================================================
// SETTINGS MENU FUNCTIONS
// ============================================================================

/**
 * Open the settings menu
 */
function openSettingsMenu() {
  settingsMenu.classList.remove('hidden');
  settingsOverlay.classList.remove('hidden');
}

/**
 * Close the settings menu
 */
function closeSettingsMenu() {
  settingsMenu.classList.add('hidden');
  settingsOverlay.classList.add('hidden');
}

/**
 * Set the game difficulty
 */
function setDifficulty(difficulty) {
  gameSettings.difficulty = difficulty;
  gameState.currentDifficulty = difficulty;
  
  // Update UI
  updateDifficultyUI();
  saveSettings();
}

/**
 * Update difficulty UI to show active option
 */
function updateDifficultyUI() {
  difficultyOptions.forEach(option => {
    const optionDifficulty = option.getAttribute('data-difficulty');
    if (optionDifficulty === gameSettings.difficulty) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

/**
 * Toggle sound on/off
 */
function toggleSound() {
  gameSettings.soundEnabled = soundToggle.checked;
  saveSettings();
}

/**
 * Toggle light/dark theme
 */
function toggleTheme() {
  gameSettings.darkMode = themeToggle.checked;
  if (gameSettings.darkMode) {
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
  }
  saveSettings();
}

/**
 * Reset all settings to defaults
 */
function resetSettings() {
  if (confirm("Reset all settings to defaults?")) {
    gameSettings = {
      soundEnabled: true,
      darkMode: false,
      difficulty: "easy"
    };
    
    gameState.currentDifficulty = "easy";
    
    updateUIFromSettings();
    saveSettings();
    closeSettingsMenu();
  }
}

/**
 * Update UI from current settings
 */
function updateUIFromSettings() {
  // Set difficulty
  soundToggle.checked = gameSettings.soundEnabled;
  themeToggle.checked = gameSettings.darkMode;
  
  // Apply theme
  if (gameSettings.darkMode) {
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
  }
  
  // Update difficulty UI
  updateDifficultyUI();
}

/**
 * Toggle showing more genres
 */
function toggleMoreGenres() {
  if (additionalGenres.classList.contains('hidden')) {
    additionalGenres.classList.remove('hidden');
    showMoreGenres.innerHTML = '<i class="fas fa-chevron-up"></i> Fewer Genres';
  } else {
    additionalGenres.classList.add('hidden');
    showMoreGenres.innerHTML = '<i class="fas fa-ellipsis-h"></i> More Genres';
  }
}

// ============================================================================
// GAME LOGIC FUNCTIONS
// ============================================================================

/**
 * Start a new game with the selected genre
 */
function startGame(genreKey) {
  // Update game state
  gameState.currentGenre = genreKey;
  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.hintsUsed = 0;
  gameState.skippedQuestions = 0;
  gameState.currentQuestions = [...gameData[genreKey].questions[gameState.currentDifficulty]];
  gameState.isAnswerRevealed = false;
  gameState.currentQuestionHints = 0;
  
  // Set points based on difficulty
  updatePointsPerQuestion();
  
  // Shuffle questions for variety
  shuffleArray(gameState.currentQuestions);
  
  // Limit to 10 questions
  gameState.currentQuestions = gameState.currentQuestions.slice(0, 10);
  
  // Update UI
  welcomeScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  resultsScreen.classList.add('hidden');
  feedbackMessage.classList.add('hidden');
  gameStats.classList.remove('hidden');
  additionalGenres.classList.add('hidden');
  showMoreGenres.innerHTML = '<i class="fas fa-ellipsis-h"></i> More Genres';
  
  // Update game stats display
  updateStats();
  
  // Load the first question
  loadQuestion();
  
  // Set the background color based on genre
  document.body.style.background = `linear-gradient(-45deg, #0a0a23, #1a1a4a, ${gameData[genreKey].color}, #6b46c1)`;
  
  if (!gameSettings.darkMode) {
    document.body.style.background = `linear-gradient(-45deg, #6a11cb, #2575fc, ${gameData[genreKey].color}, #feb47b)`;
  }
}

/**
 * Update points per question based on difficulty
 */
function updatePointsPerQuestion() {
  switch(gameState.currentDifficulty) {
    case 'easy':
      gameState.pointsPerQuestion = 10;
      break;
    case 'medium':
      gameState.pointsPerQuestion = 15;
      break;
    case 'hard':
      gameState.pointsPerQuestion = 20;
      break;
  }
}

/**
 * Load the current question
 */
function loadQuestion() {
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  
  // Reset hints for this question
  gameState.currentQuestionHints = 0;
  
  // Clear previous emojis
  emojiDisplay.innerHTML = '';
  
  // Add emojis for the current question
  currentQuestionData.emojis.forEach(emoji => {
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = emoji;
    emojiDisplay.appendChild(emojiSpan);
  });
  
  // Update question info
  questionCategory.textContent = gameData[gameState.currentGenre].name;
  currentQuestion.textContent = `Question ${gameState.currentQuestionIndex + 1} of 10`;
  questionPoints.textContent = `${gameState.pointsPerQuestion} points`;
  
  // Update answer type hint with clear instructions
  if (gameState.currentGenre === 'music') {
    const typeHints = {
      'song': '(Type Song Name Only)',
      'artist': '(Type Artist Name Only)',
      'both': '(Type Song AND Artist)'
    };
    answerTypeHint.textContent = typeHints[currentQuestionData.answerType] || '';
  } else {
    const typeHints = {
      'title': '(Title Only)',
      'character': '(Character Name)',
      'dish': '(Food/Dish Name)'
    };
    answerTypeHint.textContent = typeHints[currentQuestionData.answerType] || '';
  }
  
  // Clear input and hint
  answerInput.value = '';
  hintText.textContent = '';
  answerInput.disabled = false;
  submitButton.disabled = false;
  
  // Update hint button
  const hintsRemaining = gameState.totalHints - gameState.hintsUsed;
  hintsLeft.textContent = hintsRemaining;
  hintButton.disabled = hintsRemaining <= 0;
  
  // Make sure answer section is visible
  document.querySelector('.answer-section').classList.remove('hidden');
  
  // Focus on the input field
  answerInput.focus();
}

/**
 * Check the user's answer
 */
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (!userAnswer) return;
  
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  const correctAnswer = currentQuestionData.answer.toLowerCase();
  const correctArtist = currentQuestionData.artist ? currentQuestionData.artist.toLowerCase() : '';
  
  let isCorrect = false;
  
  // Check answer based on answerType
  if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'both') {
    // For "both" type, check if answer contains both song and artist
    const hasSong = userAnswer.includes(correctAnswer);
    const hasArtist = correctArtist && userAnswer.includes(correctArtist);
    isCorrect = hasSong && hasArtist;
  } else if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'artist') {
    // For "artist" type, check artist name
    isCorrect = userAnswer === correctArtist;
  } else {
    // For "song" type or non-music questions
    isCorrect = userAnswer === correctAnswer;
  }
  
  if (isCorrect) {
    // Correct answer
    gameState.score += gameState.pointsPerQuestion;
    showFeedback(true, currentQuestionData);
    playSound(correctSound);
  } else {
    // Wrong answer - let user try again or give up
    showTryAgainFeedback(currentQuestionData);
    playSound(wrongSound);
  }
  
  // Update stats
  updateStats();
}

/**
 * Show feedback for correct answer - FIXED VERSION
 */
function showFeedback(isCorrect, questionData) {
  // Set feedback content
  if (isCorrect) {
    feedbackTitle.textContent = "Correct!";
    feedbackTitle.style.color = "#4CAF50";
    
    // Build the feedback text safely
    let feedbackHTML = `The answer is "${questionData.answer}"`;
    
    // Only add artist if it exists and is not empty
    if (questionData.artist && questionData.artist.trim() !== "") {
      if (gameState.currentGenre === 'music' && questionData.answerType === 'both') {
        feedbackHTML = `Perfect!<br>Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
      } else if (gameState.currentGenre === 'music' && questionData.answerType === 'artist') {
        feedbackHTML = `Correct!<br>Artist: ${questionData.artist}`;
      } else if (gameState.currentGenre === 'music') {
        feedbackHTML = `Correct!<br>Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
      }
    }
    
    feedbackText.innerHTML = feedbackHTML;
    feedbackEmoji.innerHTML = "🎉🥳👏";
  } else {
    feedbackTitle.textContent = "Not Quite!";
    feedbackTitle.style.color = "#F44336";
    
    // Build the feedback text safely
    let feedbackHTML = `The correct answer is "${questionData.answer}"`;
    
    // Only add artist if it exists and is not empty
    if (questionData.artist && questionData.artist.trim() !== "") {
      feedbackHTML += `<br><br>Artist: ${questionData.artist}`;
    }
    
    feedbackText.innerHTML = feedbackHTML;
    feedbackEmoji.innerHTML = "😕🤔💡";
  }
  
  // Create next button
  feedbackButtons.innerHTML = '';
  const nextButton = document.createElement('button');
  nextButton.className = 'next-btn';
  nextButton.innerHTML = '<i class="fas fa-arrow-right"></i> Next Question';
  nextButton.addEventListener('click', nextQuestion);
  feedbackButtons.appendChild(nextButton);
  
  // Show feedback and hide question
  feedbackMessage.classList.remove('hidden');
  document.querySelector('.answer-section').classList.add('hidden');
  gameState.isAnswerRevealed = true;
}

/**
 * Show feedback for wrong answer with try again option - FIXED VERSION
 */
function showTryAgainFeedback(questionData) {
  feedbackTitle.textContent = "Not Quite Right!";
  feedbackTitle.style.color = "#FF9800";
  feedbackText.textContent = "That's not the correct answer. Would you like to try again or see the answer?";
  feedbackEmoji.innerHTML = "🤔❓💭";
  
  // Create try again and give up buttons
  feedbackButtons.innerHTML = '';
  
  const tryAgainButton = document.createElement('button');
  tryAgainButton.className = 'try-again-btn';
  tryAgainButton.innerHTML = '<i class="fas fa-redo"></i> Try Again';
  tryAgainButton.addEventListener('click', () => {
    feedbackMessage.classList.add('hidden');
    answerInput.value = '';
    answerInput.focus();
  });
  
  const giveUpButton = document.createElement('button');
  giveUpButton.className = 'give-up-btn';
  giveUpButton.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
  giveUpButton.addEventListener('click', () => {
    feedbackTitle.textContent = "Answer Revealed";
    feedbackTitle.style.color = "#9E9E9E";
    
    // Build the feedback text safely
    let feedbackHTML = `The answer is "${questionData.answer}"`;
    
    // Only add artist if it exists and is not empty
    if (questionData.artist && questionData.artist.trim() !== "") {
      if (gameState.currentGenre === 'music' && questionData.answerType === 'both') {
        feedbackHTML = `Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
      } else if (gameState.currentGenre === 'music' && questionData.answerType === 'artist') {
        feedbackHTML = `Artist: ${questionData.artist}`;
      } else if (gameState.currentGenre === 'music') {
        feedbackHTML = `Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
      }
    }
    
    feedbackText.innerHTML = feedbackHTML;
    feedbackEmoji.innerHTML = "👁️🗨️✅";
    
    // Replace buttons with next button
    feedbackButtons.innerHTML = '';
    const nextButton = document.createElement('button');
    nextButton.className = 'next-btn';
    nextButton.innerHTML = '<i class="fas fa-arrow-right"></i> Next Question';
    nextButton.addEventListener('click', nextQuestion);
    feedbackButtons.appendChild(nextButton);
    
    gameState.isAnswerRevealed = true;
  });
  
  feedbackButtons.appendChild(tryAgainButton);
  feedbackButtons.appendChild(giveUpButton);
  
  // Show feedback
  feedbackMessage.classList.remove('hidden');
  document.querySelector('.answer-section').classList.add('hidden');
}

/**
 * Give a hint for the current question
 */
function giveHint() {
  // Check if hints are available
  if (gameState.hintsUsed >= gameState.totalHints) {
    hintText.textContent = "No hints remaining!";
    hintButton.disabled = true;
    return;
  }
  
  // Get current question data
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  
  // Show appropriate hint based on how many have been used for this question
  gameState.currentQuestionHints++;
  
  if (gameState.currentQuestionHints <= currentQuestionData.hints.length) {
    hintText.textContent = `Hint ${gameState.currentQuestionHints}: ${currentQuestionData.hints[gameState.currentQuestionHints - 1]}`;
  } else {
    hintText.textContent = "No more hints for this question!";
  }
  
  // Update hint count
  gameState.hintsUsed++;
  updateStats();
  
  // Disable button if no hints left overall
  if (gameState.hintsUsed >= gameState.totalHints) {
    hintButton.disabled = true;
  }
  
  playSound(hintSound);
}

/**
 * Skip the current question - FIXED VERSION
 */
function skipQuestion() {
  // Update skipped count
  gameState.skippedQuestions++;
  
  // Show feedback for skipped question
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  feedbackTitle.textContent = "Question Skipped";
  feedbackTitle.style.color = "#FF9800";
  
  // Build the feedback text safely
  let feedbackHTML = `The answer was "${currentQuestionData.answer}"`;
  
  // Only add artist if it exists and is not empty
  if (currentQuestionData.artist && currentQuestionData.artist.trim() !== "") {
    if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'both') {
      feedbackHTML = `Song: "${currentQuestionData.answer}"<br>Artist: ${currentQuestionData.artist}`;
    } else if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'artist') {
      feedbackHTML = `Artist: ${currentQuestionData.artist}`;
    } else if (gameState.currentGenre === 'music') {
      feedbackHTML = `Song: "${currentQuestionData.answer}"<br>Artist: ${currentQuestionData.artist}`;
    }
  }
  
  feedbackText.innerHTML = feedbackHTML;
  feedbackEmoji.innerHTML = "⏭️➡️👀";
  
  // Create next button
  feedbackButtons.innerHTML = '';
  const nextButton = document.createElement('button');
  nextButton.className = 'next-btn';
  nextButton.innerHTML = '<i class="fas fa-arrow-right"></i> Next Question';
  nextButton.addEventListener('click', nextQuestion);
  feedbackButtons.appendChild(nextButton);
  
  feedbackMessage.classList.remove('hidden');
  document.querySelector('.answer-section').classList.add('hidden');
  gameState.isAnswerRevealed = true;
  
  updateStats();
  playSound(skipSound);
}

/**
 * Move to the next question
 */
function nextQuestion() {
  // Increment question index
  gameState.currentQuestionIndex++;
  
  // Check if game is over
  if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
    endGame();
    return;
  }
  
  // Hide feedback and show answer section
  feedbackMessage.classList.add('hidden');
  document.querySelector('.answer-section').classList.remove('hidden');
  
  // Load next question
  loadQuestion();
  gameState.isAnswerRevealed = false;
}

/**
 * End the game and show results
 */
function endGame() {
  // Hide game screen, show results
  gameScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  // Update results
  const correctCount = Math.floor(gameState.score / gameState.pointsPerQuestion);
  finalScore.textContent = gameState.score;
  correctAnswers.textContent = correctCount;
  skippedQuestions.textContent = gameState.skippedQuestions;
  hintsUsed.textContent = gameState.hintsUsed;
  finalDifficulty.textContent = gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1);
  
  // Update final message based on score
  const maxScore = gameState.currentQuestions.length * gameState.pointsPerQuestion;
  const percentage = (gameState.score / maxScore) * 100;
  
  if (percentage >= 90) {
    resultsMessage.textContent = "Outstanding! You're an Emoji Charades genius! 🏆";
  } else if (percentage >= 70) {
    resultsMessage.textContent = "Excellent work! You really know your stuff! ⭐";
  } else if (percentage >= 50) {
    resultsMessage.textContent = "Good job! You've got a talent for this! 👍";
  } else if (percentage >= 30) {
    resultsMessage.textContent = "Nice effort! Keep practicing and you'll get better! 💪";
  } else {
    resultsMessage.textContent = "Good try! Give it another shot, you'll do better! 🔄";
  }
}

/**
 * Quit the game and return to home screen
 */
function quitGame() {
  if (confirm("Are you sure you want to quit? Your progress will be lost.")) {
    gameScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    gameStats.classList.add('hidden');
    
    // Reset background to default
    if (gameSettings.darkMode) {
      document.body.style.background = "linear-gradient(-45deg, #0a0a23, #1a1a4a, #3d1e6d, #6b46c1)";
    } else {
      document.body.style.background = "linear-gradient(-45deg, #6a11cb, #2575fc, #ff7e5f, #feb47b)";
    }
  }
}

/**
 * Reset the current game
 */
function resetGame() {
  if (confirm("Are you sure you want to reset? Your current progress will be lost.")) {
    startGame(gameState.currentGenre);
  }
}

/**
 * Go back to genre selection
 */
function goBackToGenreSelection() {
  resultsScreen.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');
  gameStats.classList.add('hidden');
  
  // Reset background to default
  if (gameSettings.darkMode) {
    document.body.style.background = "linear-gradient(-45deg, #0a0a23, #1a1a4a, #3d1e6d, #6b46c1)";
  } else {
    document.body.style.background = "linear-gradient(-45deg, #6a11cb, #2575fc, #ff7e5f, #feb47b)";
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Update game stats display
 */
function updateStats() {
  questionCounter.textContent = `${gameState.currentQuestionIndex + 1}/10`;
  scoreCounter.textContent = gameState.score;
  hintCounter.textContent = gameState.totalHints - gameState.hintsUsed;
}

/**
 * Play sound effect if sounds are enabled
 */
function playSound(soundElement) {
  if (!gameSettings.soundEnabled) return;
  
  try {
    // Reset audio to start
    soundElement.currentTime = 0;
    // Play the sound
    soundElement.play().catch(e => {
      // Sound play failed (usually due to browser autoplay policy)
      console.log("Sound play failed:", e);
    });
  } catch (e) {
    console.log("Sound error:", e);
  }
}

/**
 * Utility function to shuffle an array
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ============================================================================
// INITIALIZE THE GAME
// ============================================================================

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', init);