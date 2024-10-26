
const formToSend = document.querySelector(".parse-form");
const statusCodeDiv = document.querySelector(".status-code");

formToSend.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        url: document.getElementById("urlToSend").value
    };
    const url = document.getElementById("urlApi").value;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        
        if (response.status == 200) {
            statusCodeDiv.innerHTML = `${response.status} OK`;
        }

    } catch (error) {
        console.error("Error:", error);
        statusCodeDiv.innerHTML = `Error`;
    }
});