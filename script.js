document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    const scoreDisplay = document.getElementById('score-display');
    let score = 0;


    // Function to move the square to a random position
    function moveSquare() {
        const container = document.getElementById('game-container');
        const maxX = container.clientWidth - square.clientWidth;
        const maxY = container.clientHeight - square.clientHeight;


        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);


        square.style.left = `${randomX}px`;
        square.style.top = `${randomY}px`;
    }


    // Event listener for clicks on the square
    square.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        moveSquare();
    });


    // Move the square initially
    moveSquare();


    // Move the square automatically every 1 second
    setInterval(moveSquare, 1000);
});
