
const formToSend = document.querySelector(".parse-form");
const statusCodeDiv = document.querySelector(".status-code");

formToSend.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        url: document.getElementById("urlToSend").value
    };
    const url = document.getElementById("urlApi").value;
    // "http://127.0.0.1:8080/parser/ur1l";

    try {
        // Send form data to the specified URL
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
    } finally {
        
    }
});