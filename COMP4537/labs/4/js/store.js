document.getElementById('storeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;
    // Regular expression to match only letters for word
    const wordRegex = /^[A-Za-z]+$/;

    if (!word.match(wordRegex) || definition.trim().length === 0) {
        document.getElementById('response').textContent = 'Please enter a valid word (letters only) and a non-empty definition.';
        return;
    }

    const data = { word, definition };

    fetch('https://yourDomainName2.wyz/api/definitions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = `Response: ${data.message}`;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('response').textContent = 'Failed to store the entry.';
    });
});
