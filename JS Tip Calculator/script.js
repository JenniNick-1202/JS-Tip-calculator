document.querySelector('#Calculate').addEventListener('click', () => {
    let totalBill = parseFloat(document.querySelector('#totalBill').value);
    let tipPercent = parseFloat(document.querySelector('#tipPercent').value);
    let split = parseFloat(document.querySelector('#split').value);

    // Validate input
    if (isNaN(totalBill) || tipPercent === 0 || isNaN(split) || split === 0) {
        alert('Please enter valid amounts.');
        return;
    }

    // Calculate total tip per person
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2); // Round to 2 decimal places

    document.getElementById('tip').innerHTML = total;
});