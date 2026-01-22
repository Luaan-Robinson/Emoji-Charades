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
          emojis: ["🪩", "🕺", "🧟‍♂️", "🧟‍♀️"],
          answer: "Thriller",
          artist: "Michael Jackson",
          hint: "This song features zombies and is by the King of Pop",
          answerType: "song" // Options: "song", "artist", "both"
        },
        {
          emojis: ["👑", "❤️", "🔥"],
          answer: "Firework",
          artist: "Katy Perry",
          hint: "This song encourages you to let your inner light shine",
          answerType: "song"
        },
        {
          emojis: ["🌊", "🌅", "🏄"],
          answer: "Kokomo",
          artist: "The Beach Boys",
          hint: "This song mentions a tropical paradise",
          answerType: "song"
        }
      ],
      medium: [
        {
          emojis: ["👶", "🌟", "💎"],
          answer: "Diamonds",
          artist: "Rihanna",
          hint: "This song compares someone to precious stones in the sky",
          answerType: "song"
        },
        {
          emojis: ["🕺", "☀️", "😎"],
          answer: "Walking on Sunshine",
          artist: "Katrina and the Waves",
          hint: "This upbeat song is about feeling extremely happy",
          answerType: "song"
        }
      ],
      hard: [
        {
          emojis: ["🏨", "💀", "🌴"],
          answer: "Hotel California",
          artist: "Eagles",
          hint: "This song describes a mysterious hotel you can check out of but never leave",
          answerType: "song"
        },
        {
          emojis: ["👑", "😔", "🇬🇧"],
          answer: "God Save the Queen",
          artist: "Sex Pistols",
          hint: "This punk song was controversial for its criticism of the monarchy",
          answerType: "both" // Requires both song and artist
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
          hint: "These heroes are named after Renaissance artists",
          answerType: "title"
        },
        {
          emojis: ["🟡", "🌀", "📦"],
          answer: "SpongeBob SquarePants",
          artist: "",
          hint: "This character lives in a pineapple under the sea",
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["🦆", "💰", "🏦"],
          answer: "Scrooge McDuck",
          artist: "",
          hint: "This character is known for swimming in his money",
          answerType: "character"
        }
      ],
      hard: [
        {
          emojis: ["🦊", "🐶", "🔫", "🌵"],
          answer: "Cowboy Bebop",
          artist: "",
          hint: "This anime follows bounty hunters in space",
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
          hint: "This game features a hero named Link saving Princess Zelda",
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["👦", "👧", "⚡", "🧙"],
          answer: "Harry Potter",
          artist: "",
          hint: "This game is based on the wizard who lived",
          answerType: "title"
        }
      ],
      hard: [
        {
          emojis: ["🌙", "👨", "🐺"],
          answer: "Bloodborne",
          artist: "",
          hint: "This FromSoftware game is set in a Gothic, Victorian-inspired world",
          answerType: "title"
        }
      ]
    }
  },
  // ============================================================================
  // ADD NEW GENRES HERE - FOLLOW THE SAME STRUCTURE
  // ============================================================================
  movies: {
    name: "Movies",
    color: "#9C27B0",
    questions: {
      easy: [
        {
          emojis: ["🦁", "👑", "🌅"],
          answer: "The Lion King",
          artist: "",
          hint: "This Disney movie features a young lion prince",
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["👨", "⚡", "🔨"],
          answer: "Thor",
          artist: "",
          hint: "This Marvel superhero is based on Norse mythology",
          answerType: "title"
        }
      ],
      hard: [
        {
          emojis: ["👦", "🏃", "🌪️"],
          answer: "Forrest Gump",
          artist: "",
          hint: "This movie follows a man with a low IQ who witnesses historical events",
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
          hint: "This Italian dish is a worldwide favorite",
          answerType: "dish"
        }
      ],
      medium: [
        {
          emojis: ["🍣", "🇯🇵"],
          answer: "Sushi",
          artist: "",
          hint: "This Japanese dish features vinegared rice and seafood",
          answerType: "dish"
        }
      ],
      hard: [
        {
          emojis: ["🥘", "🇪🇸", "🥘"],
          answer: "Paella",
          artist: "",
          hint: "This Spanish rice dish is often made with seafood or meat",
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
          hint: "This book series features a young wizard at Hogwarts",
          answerType: "title"
        }
      ],
      medium: [
        {
          emojis: ["🐭", "👨", "🏰"],
          answer: "Mickey Mouse",
          artist: "Walt Disney",
          hint: "This iconic cartoon character was created in 1928",
          answerType: "character"
        }
      ],
      hard: [
        {
          emojis: ["👹", "🔔", "🏰"],
          answer: "The Hunchback of Notre Dame",
          artist: "Victor Hugo",
          hint: "This novel is set in medieval Paris and features Quasimodo",
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
  isAnswerRevealed: false
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
  
  // Update answer type hint for music questions
  if (gameState.currentGenre === 'music') {
    const typeHints = {
      'song': '(Song Name)',
      'artist': '(Artist Name)',
      'both': '(Song & Artist)'
    };
    answerTypeHint.textContent = typeHints[currentQuestionData.answerType] || '';
  } else {
    answerTypeHint.textContent = '';
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
 * Show feedback for correct answer
 */
function showFeedback(isCorrect, questionData) {
  // Set feedback content
  if (isCorrect) {
    feedbackTitle.textContent = "Correct!";
    feedbackTitle.style.color = "#4CAF50";
    
    if (gameState.currentGenre === 'music' && questionData.answerType === 'both') {
      feedbackText.innerHTML = `Perfect!<br>Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
    } else if (gameState.currentGenre === 'music' && questionData.answerType === 'artist') {
      feedbackText.innerHTML = `Correct!<br>Artist: ${questionData.artist}`;
    } else if (gameState.currentGenre === 'music') {
      feedbackText.innerHTML = `Correct!<br>Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
    } else {
      feedbackText.textContent = `The answer is "${questionData.answer}"`;
    }
    
    feedbackEmoji.innerHTML = "🎉🥳👏";
  } else {
    feedbackTitle.textContent = "Not Quite!";
    feedbackTitle.style.color = "#F44336";
    feedbackText.textContent = `The correct answer is "${questionData.answer}"`;
    if (questionData.artist) {
      feedbackText.innerHTML += `<br><br>Artist: ${questionData.artist}`;
    }
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
 * Show feedback for wrong answer with try again option
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
    
    if (gameState.currentGenre === 'music' && questionData.answerType === 'both') {
      feedbackText.innerHTML = `Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
    } else if (gameState.currentGenre === 'music' && questionData.answerType === 'artist') {
      feedbackText.innerHTML = `Artist: ${questionData.artist}`;
    } else if (gameState.currentGenre === 'music') {
      feedbackText.innerHTML = `Song: "${questionData.answer}"<br>Artist: ${questionData.artist}`;
    } else {
      feedbackText.textContent = `The answer is "${questionData.answer}"`;
    }
    
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
  
  // Get hint for current question
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  hintText.textContent = `Hint: ${currentQuestionData.hint}`;
  
  // Update hint count
  gameState.hintsUsed++;
  updateStats();
  
  // Disable button if no hints left
  if (gameState.hintsUsed >= gameState.totalHints) {
    hintButton.disabled = true;
  }
  
  playSound(hintSound);
}

/**
 * Skip the current question
 */
function skipQuestion() {
  // Update skipped count
  gameState.skippedQuestions++;
  
  // Show feedback for skipped question
  const currentQuestionData = gameState.currentQuestions[gameState.currentQuestionIndex];
  feedbackTitle.textContent = "Question Skipped";
  feedbackTitle.style.color = "#FF9800";
  
  if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'both') {
    feedbackText.innerHTML = `Song: "${currentQuestionData.answer}"<br>Artist: ${currentQuestionData.artist}`;
  } else if (gameState.currentGenre === 'music' && currentQuestionData.answerType === 'artist') {
    feedbackText.innerHTML = `Artist: ${currentQuestionData.artist}`;
  } else if (gameState.currentGenre === 'music') {
    feedbackText.innerHTML = `Song: "${currentQuestionData.answer}"<br>Artist: ${currentQuestionData.artist}`;
  } else {
    feedbackText.textContent = `The answer was "${currentQuestionData.answer}"`;
  }
  
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