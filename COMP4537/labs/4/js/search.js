document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('searchWord').value;
    // Regular expression to match only letters
    const regex = /^[A-Za-z]+$/;

    if (!word.match(regex)) {
        document.getElementById('searchResponse').textContent = 'Please enter a valid word (letters only).';
        return;
    }

    fetch(`https://ondrik.dev/comp4537/labs/5/api/definitions/?word=${encodeURIComponent(word)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) {
            document.getElementById('searchResponse').textContent = `${data.message}`;
        } else {
            document.getElementById('searchResponse').textContent = 'Word not found.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('searchResponse').textContent = 'Failed to fetch the definition.';
    });
});
