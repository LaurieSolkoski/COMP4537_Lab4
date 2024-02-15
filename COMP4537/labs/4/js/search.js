document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('searchWord').value;

    fetch(`https://yourDomainName2.wyz/api/definitions/?word=${encodeURIComponent(word)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if(data.definition) {
            document.getElementById('searchResponse').textContent = `Definition: ${data.definition}`;
        } else {
            document.getElementById('searchResponse').textContent = 'Word not found.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('searchResponse').textContent = 'Failed to fetch the definition.';
    });
});