document.getElementById('storeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('word').value.trim();
    const definition = document.getElementById('definition').value.trim();
    // Regular expression to match only letters for word
    const wordRegex = /^[A-Za-z]+$/;

    if (!wordRegex.test(word) || definition.length === 0) {
        document.getElementById('response').innerHTML = 'Please enter a valid word (letters only) and a non-empty definition.';
        return;
    }

    const data = { word, definition };

    fetch('https://ondrik.dev/comp4537/labs/5/api/definitions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('response').innerHTML = `Response: ${data.message}`;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = 'Failed to store the entry.';
    });
});
