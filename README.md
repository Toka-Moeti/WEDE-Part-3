# WEDE-Part-3
# Concept Media Website - Part 3

## Changelog (Fixes from Part 2 Feedback)
*   **Form Adjustments:** Updated the `enquiry.html` to include necessary email and phone number fields as required.
*   **Responsiveness:** Checked and adjusted layout for mobile screens so that the navigation bar stacks vertically.
*   **Image optimization:** Added `srcset` to the hero image to ensure faster loading on mobile devices.

## Part 3 Features Implemented
*   **Interactive Elements:** Built a JavaScript-powered accordion on the `about.html` page for the organisation history.
*   **Dynamic Content:** Created a dynamic array of services in JavaScript and implemented a filter system on `services.html`. Content loads dynamically on page load.
*   **Form Functionality:**
    *   Added HTML5 validation attributes (required, type).
    *   Implemented custom JavaScript validation for the Enquiry form (checks for a 10-digit phone number and valid email regex).
    *   Implemented AJAX form submission using `setTimeout` to simulate a network request without reloading the page, displaying a personalized success message.
*   **Search Engine Optimization (SEO):**
    *   Added unique Meta Titles and Descriptions to every page.
    *   Ensured heading tags (h1, h2) are used logically.
    *   Added `robots.txt` to allow search engine indexing.
    *   Generated a `sitemap.xml` to define the site structure.
*   **Deployment:** Site deployed to Netlify.

## References
*   MDN Web Docs: Client-side form validation
*   W3Schools: JavaScript DOM Elements
*   Netlify Documentation: Deploying static sites
