rollBtn.onclick = function () {

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

}