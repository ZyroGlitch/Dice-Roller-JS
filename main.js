rollBtn.onclick = function () {

    const body = document.getElementById('body');
    const numDice = parseInt(document.getElementById('input').value, 10);
    const diceNumber = document.getElementById('diceNumber');
    const images = document.getElementById('images');

    let diceValues = [];
    let diceImages = [];

    // Generate dice values and images
    for (let i = 0; i < numDice; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        diceValues.push(random);
        diceImages.push(`<img class="size-40 object-contain" id="dice${random}" src="images/dice${random}.png" alt="Dice ${random}">`);
    }

    // Update dice display
    diceNumber.textContent = `Dice : ${diceValues.join(', ')}`;
    images.innerHTML = diceImages.join('');

    // Adjust body height based on number of dice
    if (numDice > 7) {
        body.style.height = 'auto'; // Adjusts body height to fit content
    } else {
        body.style.height = '100vh'; // Keeps the height as full viewport height
    }

    // Adjust margin of first dice
    const dice1 = document.getElementById(`dice${diceValues[0]}`);
    dice1.style.marginTop = '24px';
    dice1.style.marginLeft = '24px';
}
