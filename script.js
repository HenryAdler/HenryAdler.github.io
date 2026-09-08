// Search Functionality (Can be tested with garbage queries)
document.getElementById('search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.project-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const tags = card.getAttribute('data-tags');
        const text = card.innerText.toLowerCase();

        if (text.includes(query) || tags.includes(query)) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
});

// Contact Form Handler (Contains intentional edge cases to break!)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');

    // INTENTIONAL EDGE CASE: No proper email validation and no double-click protection!
    if (!name || !email || !message) {
        feedback.style.color = '#dc2626';
        feedback.textContent = 'Please fill out all required fields.';
        return;
    }

    feedback.style.color = '#16a34a';
    feedback.textContent = 'Message sent successfully!';
});
