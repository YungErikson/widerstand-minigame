document.addEventListener('DOMContentLoaded', (event) => {
    const resistors = document.querySelectorAll('.resistor');
    const boxes = document.querySelectorAll('.box');
  
    resistors.forEach(resistor => {
        assignRandomValue(resistor);
        resistor.addEventListener('dragstart', dragStart);
    });
  
    boxes.forEach(box => {
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', drop);
    });
  
    function assignRandomValue(resistor) {
        const randomIndex = Math.floor(Math.random() * resistorValues.length);
        const randomValue = resistorValues[randomIndex];
        
        // Assign random value as a data attribute
        resistor.dataset.resistorValue = randomValue;
        resistor.textContent = randomValue + " Ohm"; // Update displayed value
    }
  
    function dragStart(event) {
        const resistorValue = event.target.dataset.resistorValue;
        event.dataTransfer.setData('text/plain', resistorValue);
        
        // Optional: Add the random-resistor class (for styling)
        const draggedResistor = document.getElementById(event.target.id);
        draggedResistor.classList.add('random-resistor');
    }
  
    function dragOver(event) {
        event.preventDefault();
    }
  
    function drop(event) {
        event.preventDefault();
        const resistorValue = event.dataTransfer.getData('text/plain');
        const boxId = event.target.id;
        const expectedValue = parseInt(boxId.split('-')[1]);
  
        if (resistorValue === expectedValue.toString()) {
            // Correct placement logic (e.g., alert or visual feedback)
            alert('Richtig eingeordnet!');
            
            // Get the resistor element that was dropped
            const droppedResistor = document.querySelector('.random-resistor');
            if (droppedResistor) {
                // Assign a new random value
                assignRandomValue(droppedResistor);
                
                // Remove the random-resistor class after assigning new value
                droppedResistor.classList.remove('random-resistor');
            }
        } else {
            // Incorrect placement logic (e.g., alert or visual feedback)
            alert('Falsch eingeordnet!');
        }
    }
});

// Define resistor values (modify as needed)
const resistorValues = [12, 120, 1200, 12000, 120000, 15, 150, 1500, 15000, 150000, 18, 180, 1800, 18000, 180000, 22, 220, 2200, 22000, 220000, 27, 270, 2700, 27000, 270000,
    33, 330, 3300, 33000, 330000, 39, 390, 3900, 39000, 390000, 47, 470, 4700, 47000, 470000, 56, 560, 5600, 56000, 560000, 68, 680, 6800, 68000, 680000,
    82, 820, 8200, 82000, 820000, 100, 1000, 10000, 100000, 1000000];
