document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("roman-quote");
    if (quoteElement) {
        const quotes = [
            '"Veni, vidi, vici." (I came, I saw, I conquered.) — Julius Caesar',
            '"Alea iacta est." (The die is cast.) — Julius Caesar',
            '"Amor fati." (Love of fate.) — Marcus Aurelius',
            '"Carpe diem." (Seize the day.) — Horace',
            '"Fortes fortuna adiuvat." (Fortune favors the brave.) — Terence'
        ];
      
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerText = randomQuote;
    }

    const contactForm = document.getElementById("enlistForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const nameInput = document.getElementById("name").value.trim();
            const messageInput = document.getElementById("message").value.trim();
            
            const hasNumber = /\d/;
            if (hasNumber.test(nameInput)) {
                alert("A true Roman citizen's name contains no numbers! Please correct your name.");
                event.preventDefault(); // Stop form submission
                return;
            }
            if (messageInput.length < 15) {
                alert("Your message to the Senate is too brief. Please provide a detailed missive (at least 15 characters).");
                event.preventDefault(); // Stop form submission
                return;
            }

            alert("Success! Your dispatch has been securely sealed and sent to the Senate.");
        });
    }
});
