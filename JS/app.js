document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.getElementById('age');
    const checkButton = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
    
    // Define the age threshold for a minor (17 and below)
    const MINOR_AGE_THRESHOLD = 17;
    
    // Function to check if the user is a minor
    function checkAge() {
        // Get the age value from the input
        const age = parseInt(ageInput.value);
        
        // Clear previous result classes
        resultDiv.classList.remove('minor', 'adult');
        
        // Validate input
        if (isNaN(age) || age < 0) {
            resultDiv.textContent = 'Please enter a valid age';
            return;
        }
        
        // Check if the user is a minor
        if (age <= MINOR_AGE_THRESHOLD) {
            resultDiv.textContent = 'You are a minor';
            resultDiv.classList.add('minor');
        } else {
            resultDiv.textContent = 'You are an adult';
            resultDiv.classList.add('adult');
        }
    }
    
    // Add event listener to the button
    checkButton.addEventListener('click', checkAge);
    
    // Also check when Enter key is pressed in the input field
    ageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkAge();
        }
    });
});