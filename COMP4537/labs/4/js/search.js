/// DISCLOSURE: the following JavaScript code has been created with the aid of 
// Chat GPT 3.5 and edited by Laurie Solkoski. 

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('searchWord').value.trim();
    // xpression to match only letters
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(word)) {
        document.getElementById('searchResponse').innerHTML = langEN.ENTER_VALID_WORD;
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
        document.getElementById('searchResponse').innerHTML = data.message || langEN.WORD_NOT_FOUND;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('searchResponse').innerHTML = langEN.FAILED_FETCH_DEFINITION;
    });
});