const menuLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.section');
const viewArticleButtons = document.querySelectorAll('.view-article-btn');
const articlePopup = document.getElementById('article-popup');
const closeArticlePopup = document.getElementById('close-article-popup');
const popupTitle = document.getElementById('popup-title');
const popupDetails = document.getElementById('popup-details');

// Sample data for articles
const articles = {
    1: {
        title: "Classical Communications with Indefinite Causal Order for N completely depolarizing channels",
        details: "In the presence of indefinite causal order, two identical copies of a completely depolarizing channel can transmit non-zero information. This arises due to quantum superposition of two alternative orders of quantum channels. Here, we address the question: Can we transmit perfect classical information with superposition.."
    },
    2: {
        title: "Article 2: Analysis and Findings",
        details: "This is the detailed content of Article 2. It explores findings and provides analysis on the research work."
    }
};

// Menu Navigation
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');

        sections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');
    });
});

// Open Article Popup
viewArticleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const articleId = button.getAttribute('data-article');
        popupTitle.textContent = articles[articleId].title;
        popupDetails.textContent = articles[articleId].details;

        articlePopup.classList.remove('close');
        articlePopup.classList.add('open');
    });
});

// Close Article Popup
closeArticlePopup.addEventListener('click', () => {
    articlePopup.classList.remove('open');
    articlePopup.classList.add('close');
});
