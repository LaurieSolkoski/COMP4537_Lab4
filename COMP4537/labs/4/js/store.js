document.getElementById('storeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;
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