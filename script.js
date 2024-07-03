document.addEventListener('DOMContentLoaded', (event) => {
    const resistors = document.querySelectorAll('.resistor');
    const boxes = document.querySelectorAll('.box');

    resistors.forEach(resistor => {
        resistor.addEventListener('dragstart', dragStart);
    });

    boxes.forEach(box => {
        box.addEventListener('dragover', dragOver);
        box.addEventListener('drop', drop);
    });

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const resistorId = event.dataTransfer.getData('text/plain');
        const resistor = document.getElementById(resistorId);
        const boxId = event.target.id;

        if (resistorId === `resistor-${boxId.split('-')[1]}`) {
            event.target.appendChild(resistor);
            alert('Richtig eingeordnet!');
        } else {
            alert('Falsch eingeordnet!');
        }
    }
});
