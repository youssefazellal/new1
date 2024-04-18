document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((faqItem, index) => {
        const displayTextButton = faqItem.querySelector('.displayTextButton');
        const displayText = faqItem.querySelector('.displayText');
        let isTextDisplayed = false;

        faqItem.addEventListener('click', function() {
            if (isTextDisplayed) {
                displayText.innerHTML = '';
            } else {
                displayText.innerHTML = 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.';
            }
            isTextDisplayed = !isTextDisplayed;
        });
    });
});
