document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // 1. INTERACTIVE ELEMENTS: ACCORDION (About)
    // ==========================================
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    // ==========================================
    // 2. DYNAMIC CONTENT & FILTERING (Services)
    // ==========================================
    const servicesData = [
        { name: "Artist Bookings", desc: "Securing paid gigs, shows, brand deals, and campus events.", type: "artist" },
        { name: "Contract & Fee Negotiation", desc: "Professional rate cards, contracts, and rider management.", type: "artist" },
        { name: "Logistics & Coordination", desc: "Travel, accommodation, technical requirements, and day-of management.", type: "artist" },
        { name: "Brand Partnerships", desc: "Connecting artists with sponsors and campaigns that fit their image.", type: "artist" },
        { name: "Event Sponsorship", desc: "Title, presenting, and category sponsorship for Campus Clash and other properties.", type: "brand" },
        { name: "Brand Activations", desc: "On-campus activations, sampling, stalls, and experiential marketing.", type: "brand" },
        { name: "Audience Engagement", desc: "Access to 18-25 student market across TVETs, Universities, and local communities.", type: "brand" },
        { name: "Content & Media Integration", desc: "Logo placement, product integration, social campaigns, and video content.", type: "brand" }
    ];

    const servicesContainer = document.getElementById("dynamicServices");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function renderServices(filter = "all") {
        if (!servicesContainer) return;
        servicesContainer.innerHTML = ""; 

        const filtered = filter === "all" ? servicesData : servicesData.filter(s => s.type === filter);

        filtered.forEach(service => {
            const card = document.createElement("div");
            card.className = "service-card";
            card.innerHTML = `<h2>${service.name}</h2><p>${service.desc}</p>`;
            servicesContainer.appendChild(card);
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                renderServices(btn.dataset.filter);
            });
        });
        renderServices(); 
    }

    // ==========================================
    // 3. FORM VALIDATION & AJAX (Enquiry)
    // ==========================================
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault(); 
            
            let isValid = true;
            const responseDiv = document.getElementById("formResponse");
            
            const fname = document.getElementById("fname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("serviceType").value;

            // Validate Phone (Exactly 10 digits)
            if (!/^\d{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number (e.g., 0712345678).");
                isValid = false;
            }

            // Validate Email 
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                isValid = false;
            }

            // If valid, simulate AJAX submission
            if (isValid) {
                const btn = enquiryForm.querySelector("button");
                btn.textContent = "Sending...";
                btn.disabled = true;

                setTimeout(() => {
                    enquiryForm.style.display = "none";
                    responseDiv.style.display = "block";
                    responseDiv.innerHTML = `
                        <h3>Thank you, ${fname}!</h3>
                        <p>Your enquiry regarding <strong>${service}</strong> has been received. 
                        We will contact you at ${email} or ${phone} shortly.</p>
                    `;
                }, 1000);
            }
        });
    }
});