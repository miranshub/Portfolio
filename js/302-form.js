document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    fetch('https://formspree.io/f/mgvwjlll', {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            console.log("Form submitted successfully");

            document.getElementById("feedbackForm").reset();
            
        } else {
            alert('There was an error. Please try again.');
        }
    });
});