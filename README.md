Emoji Charades BETA 🎮
<div align="center">
Guess the answer from emoji clues!
A fun, interactive web game where players decipher emoji puzzles across multiple genres

Play Now • Features • How to Play
</div>
🚀 Quick Start
<img width="1184" height="882" alt="image" src="https://github.com/user-attachments/assets/db5e0ef6-c593-4e45-81a8-e81034b21387" />
<img width="1187" height="842" alt="image" src="https://github.com/user-attachments/assets/affd75d9-0564-4e7e-9d83-461e587842f5" />


Live Demo

🔗 Play Now: https://luaan-robinson.github.io/emoji-charades/
Local Setup

    Clone the repository:
    bash

    git clone https://github.com/luaan-robinson/emoji-charades.git
    cd emoji-charades

    Open the game:

        Simply open index.html in your browser

        Or use a local server:
        bash

        # Python 3
        python -m http.server 8000

        # Node.js with http-server
        npx http-server

    Start playing! 🎉

✨ Features
🎯 Game Modes & Genres

    6 Different Genres: Music, Cartoons, Video Games, Movies, Food, and Books

    3 Difficulty Levels: Easy (10 pts), Medium (15 pts), Hard (20 pts)

    Unlimited Hints: During BETA phase - get help when you're stuck!

🎮 Gameplay Features

    10 Questions Per Game: Each with unique emoji combinations

    Flexible Answer System: Accepts variations (e.g., "elvis" = "Elvis Presley")

    Real-time Scoring: Track your progress with live stats

    Detailed Feedback: Learn the correct answers after each question

🎨 Visual Experience

    Animated Background: Smooth gradient transitions

    Responsive Design: Works perfectly on desktop, tablet, and mobile

    Light/Dark Mode: Toggle between themes based on preference

    Emoji Animations: Floating emoji effects for visual appeal

⚙️ Customization Options

    Sound Controls: Toggle sound effects on/off

    Difficulty Settings: Change anytime during gameplay

    Theme Switching: Light or dark mode

    Settings Persistence: Your preferences are saved locally

🎯 How to Play
Basic Rules

    Select a Genre from the welcome screen

    Decode the emoji clues displayed on screen

    Type your answer in the input field

    Submit and see if you're correct!

    Complete 10 questions to finish the game

Game Controls
Button	Function
📥 Submit	Submit your answer
💡 Hint	Get a hint (unlimited during BETA)
⏭️ Skip	Skip to the next question
🏠 Quit	Return to genre selection
🔄 Reset	Restart the current game
⚙️ Settings	Adjust game preferences
Scoring System

    Correct Answer: Full points based on difficulty

    Wrong Answer: Try again or reveal the answer

    Skipped Question: No points awarded

    Hint Used: No penalty (unlimited during BETA!)

Pro Tip: Higher difficulty = More points per question! 🏆
📁 Project Structure
text

emoji-charades/
├── index.html          # Main HTML file
├── styles.css          # All game styles and animations
├── script.js           # Game logic and functionality
├── README.md           # This file
└── assets/             # (Future) Image assets

File Overview

    index.html: Game structure and UI components

    styles.css: Complete styling with animations and responsive design

    script.js: Core game logic, answer validation, and state management

🔧 Technical Details
Technologies Used

    HTML5 - Game structure and semantics

    CSS3 - Styling with animations, gradients, and responsive design

    JavaScript (ES6+) - Game logic, state management, and interactivity

    Font Awesome - Icons for UI elements

    Google Fonts - Typography (Poppins & Fredoka One)

Key Features Implementation

    Local Storage: Settings persistence across sessions

    History API: Back button handling for mobile devices

    Flexible Validation: Intelligent answer matching system

    Audio Integration: Sound effects for game actions

    Responsive Design: Mobile-first approach with breakpoints

Answer Validation System

The game uses an intelligent matching system that accepts:

    Case-insensitive answers (elvis = Elvis)

    Partial matches (spongebob = SpongeBob SquarePants)

    Common variations (acdc = AC/DC)

    Artist-only answers (elvis = Elvis Presley)

📱 Mobile Support

The game is fully responsive and optimized for:

    📱 Mobile Phones (320px and up)

    💻 Tablets (768px and up)

    🖥️ Desktop (1024px and up)

Mobile-specific features:

    Touch-friendly buttons and inputs

    Optimized layouts for smaller screens

    Back button handling with confirmation modal

    Adjustable font sizes for readability

🎨 Customization
Adding New Questions

Expand the game by adding questions to script.js:
javascript

{
  emojis: ["🎮", "🐉", "⚔️", "🧝"],
  answer: "The Legend of Zelda",
  artist: "", // Leave empty for non-music questions
  hints: [
    "Hint 1",
    "Hint 2",
    "Hint 3"
  ],
  answerType: "title" // Options: song, artist, both, title, character, dish
}

Adding New Genres

    Add a new genre object to gameData

    Update the genre icon in getGenreIcon() function

    Add a description in getGenreDescription() function

🐛 Known Issues & BETA Notes
Current Limitations

    Limited Question Pool: More questions being added regularly

    No Multiplayer: Currently single-player only

    No Leaderboards: Feature planned for full release

BETA Features

    ✅ Unlimited hints (will be limited in final version)

    ✅ Basic genre selection (more genres coming soon)

    ✅ Core gameplay mechanics (additional modes planned)

🤝 Contributing

Found a bug? Have a suggestion? Want to add more questions?

    Fork the repository

    Create a feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some AmazingFeature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

Contribution Ideas

    Add new emoji puzzles to existing genres

    Create entirely new genres

    Improve the answer validation algorithm

    Add accessibility features

    Create new game modes

📞 Support & Feedback

During the BETA phase, your feedback is invaluable!

Contact the Developer:

    Name: Luaan Robinson

    Email: luaanrobinson@gmail.com

    Phone: +27687503349

    GitHub: @luaan-robinson

How to Provide Feedback:

    Use the "Send Feedback" button in the game settings

    Email directly with suggestions or bug reports

    Create an issue on GitHub

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Emoji Data: Standard Unicode emoji characters

    Sound Effects: Mixkit for royalty-free audio

    Icons: Font Awesome for beautiful icons

    Fonts: Google Fonts for typography

    Testers: All BETA testers for valuable feedback

<div align="center">
Made with ❤️ for emoji lovers everywhere!

⭐ Star this repo if you like the game! ⭐

Happy Gaming! 🎮✨
</div>
🚧 Roadmap
Upcoming Features

    More Genres: Sports, Science, Geography

    Daily Challenges: New puzzles every day

    Multiplayer Mode: Play with friends

    Leaderboards: Compete for high scores

    Achievements: Unlock badges and rewards

    Soundtrack: Background music options

    Question Editor: Create your own puzzles

Version History

    BETA 1.0 (Current): Core gameplay with 6 genres

    Planned 1.1: More questions and bug fixes

    Planned 2.0: Multiplayer and social features

Last Updated: January 2026
BETA Version: 1.0
