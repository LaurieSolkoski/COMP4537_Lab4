document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('searchWord').value.trim();
    // Regular expression to match only letters
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(word)) {
        document.getElementById('searchResponse').innerHTML = 'Please enter a valid word (letters only).';
        return;
    }

    fetch(`https://ondrik.dev/comp4537/labs/5/api/definitions?word=${encodeURIComponent(word)}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('searchResponse').innerHTML = data.message || 'Word not found.';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('searchResponse').innerHTML = 'Failed to fetch the definition.';
    });
});
