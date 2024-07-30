rollBtn.onclick = function () {

    const body = document.getElementById('body');
    const numDice = document.getElementById('input').value;
    const rollBtn = document.getElementById('rollBtn');
    const diceNumber = document.getElementById('diceNumber');
    const images = document.getElementById('images');

    let diceValues = [];
    let diceImages = [];

    for (let i = 0; i < numDice; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        diceValues.push(random);
        diceImages.push(`<img class="size-40 object-contain" src="images/dice${random}.png" alt="Dice ${random}">`);
    }

    diceNumber.textContent = `Dice : ${diceValues.join(', ')}`;
    images.innerHTML = diceImages.join('');

    // Adjust body height based on number of dice
    if (numDice > 7) {
        body.style.height = 'auto'; // Adjusts body height to fit content
    } else {
        body.style.height = '100vh'; // Keeps the height as full viewport height
    }

}