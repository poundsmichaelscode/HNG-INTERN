 const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
        let targetColor = "";
        let score = 0;
        
        function startGame() {
            targetColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById("colorBox").style.backgroundColor = targetColor;
            document.getElementById("gameStatus").innerText = "";
        }
        
        function setupOptions() {
            const optionsContainer = document.getElementById("colorOptions");
            optionsContainer.innerHTML = "";
            colors.forEach(color => {
                const button = document.createElement("button");
                button.classList.add("color-option");
                button.style.backgroundColor = color;
                button.setAttribute("data-testid", "colorOption");
                button.onclick = () => checkGuess(color);
                optionsContainer.appendChild(button);
            });
        }
        
        function checkGuess(selectedColor) {
            if (selectedColor === targetColor) {
                score++;
                document.getElementById("gameStatus").innerText = "Correct! 🎉";
            } else {
                document.getElementById("gameStatus").innerText = "Wrong! Try again. ❌";
            }
            document.getElementById("score").innerText = score;
        }
        
        document.getElementById("newGameButton").addEventListener("click", () => {
            startGame();
        });
        
        setupOptions();
        startGame();
