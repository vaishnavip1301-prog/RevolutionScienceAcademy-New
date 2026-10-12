// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

document.addEventListener("DOMContentLoaded", function () {

    const eventsPage = document.querySelector(".rsa-events-page");

    if (!eventsPage) {
        return;
    }

    // ==============================
    // EVENT CATEGORY FILTER
    // ==============================
    const filterButtons = eventsPage.querySelectorAll(".rsa-event-filter");
    const eventItems = eventsPage.querySelectorAll(".rsa-event-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (filterButton) {
                const isActive = filterButton === button;

                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            eventItems.forEach(function (item) {

                const itemCategory = item.dataset.category;

                // "all" displays every event photo.
                const shouldShow =
                    selectedCategory === "all" ||
                    itemCategory === selectedCategory;

                item.classList.toggle("d-none", !shouldShow);
            });

        });

    });

    // ==============================
    // EVENT PHOTO MODAL
    // ==============================
    const modal = document.getElementById("rsaEventModal");
    const modalImage = document.getElementById("rsaEventModalImage");
    const modalTitle = document.getElementById("rsaEventModalTitle");

    if (!modal || !modalImage || !modalTitle) {
        return;
    }

    // Display the selected photo when the modal opens.
    modal.addEventListener("show.bs.modal", function (event) {

        const trigger = event.relatedTarget;

        if (!trigger) {
            return;
        }

        const imagePath = trigger.getAttribute("data-image");
        const imageTitle =
            trigger.getAttribute("data-title") || "Event Photo";

        modalTitle.textContent = imageTitle;
        modalImage.alt = imageTitle;
        modalImage.onerror = null;
        modalImage.removeAttribute("src");

        if (!imagePath) {
            modalTitle.textContent = "Photo path not found";
            return;
        }

        modalImage.onerror = function () {
            modalImage.removeAttribute("src");
            modalTitle.textContent =
                "Photo could not be loaded. Please check the image path.";
        };

        modalImage.src = imagePath;
    });

    // Clear the photo when the modal closes.
    modal.addEventListener("hidden.bs.modal", function () {
        modalImage.onerror = null;
        modalImage.removeAttribute("src");
        modalImage.alt = "Event photo";
        modalTitle.textContent = "Event Photo";
    });

});

// ----------------------------------------------------------------------------
// ==============================
// WEBSITE LANGUAGE SWITCHER
// ==============================
function changeWebsiteLanguage(language) {
    if (language !== "en" && language !== "mr") {
        return;
    }

    localStorage.setItem("rsa-language", language);

    document.documentElement.lang = language;

    updateLanguageButtons(language);

    window.location.reload();
}

function updateLanguageButtons(language) {
    const englishButton = document.getElementById("englishLanguage");
    const marathiButton = document.getElementById("marathiLanguage");

    if (englishButton) {
        englishButton.classList.toggle("active", language === "en");
    }

    if (marathiButton) {
        marathiButton.classList.toggle("active", language === "mr");
    }
}

// ==============================
// EVENTS PAGE
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    // Restore selected language
    const language = localStorage.getItem("rsa-language") || "en";

    document.documentElement.lang = language;
    updateLanguageButtons(language);

    const eventsPage = document.querySelector(".rsa-events-page");

    if (!eventsPage) {
        return;
    }

    // Event category filter
    const filterButtons = eventsPage.querySelectorAll(".rsa-event-filter");
    const eventItems = eventsPage.querySelectorAll(".rsa-event-item");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (filterButton) {
                const isActive = filterButton === button;

                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            eventItems.forEach(function (item) {
                const itemCategory = item.dataset.category;

                const shouldShow =
                    selectedCategory === "all" ||
                    itemCategory === selectedCategory;

                item.classList.toggle("d-none", !shouldShow);
            });
        });
    });

    // Event photo modal
    const modal = document.getElementById("rsaEventModal");
    const modalImage = document.getElementById("rsaEventModalImage");
    const modalTitle = document.getElementById("rsaEventModalTitle");

    if (!modal || !modalImage || !modalTitle) {
        return;
    }

    modal.addEventListener("show.bs.modal", function (event) {
        const trigger = event.relatedTarget;

        if (!trigger) {
            return;
        }

        const imagePath = trigger.getAttribute("data-image");
        const imageTitle =
            trigger.getAttribute("data-title") || "Event Photo";

        modalTitle.textContent = imageTitle;
        modalImage.alt = imageTitle;
        modalImage.removeAttribute("src");

        if (!imagePath) {
            modalTitle.textContent = "Photo path not found";
            return;
        }

        modalImage.onerror = function () {
            modalImage.removeAttribute("src");
            modalTitle.textContent = "Photo could not be loaded.";
        };

        modalImage.src = imagePath;
    });

    modal.addEventListener("hidden.bs.modal", function () {
        modalImage.onerror = null;
        modalImage.removeAttribute("src");
        modalImage.alt = "Event photo";
        modalTitle.textContent = "Event Photo";
    });
});

// -----------------------------------------------------------------

function hideGoogleTranslateBanner() {
    document.querySelectorAll(
        '.goog-te-banner-frame, iframe.goog-te-banner-frame'
    ).forEach(function (frame) {
        frame.style.setProperty('display', 'none', 'important');
        frame.style.setProperty('visibility', 'hidden', 'important');
        frame.style.setProperty('height', '0', 'important');
    });

    document.body.style.setProperty('top', '0px', 'important');
    document.documentElement.style.setProperty('margin-top', '0px', 'important');
}

document.addEventListener('DOMContentLoaded', function () {
    hideGoogleTranslateBanner();

    // Google Translate पुन्हा banner तयार करत असेल तर तो hide करा.
    const observer = new MutationObserver(function () {
        hideGoogleTranslateBanner();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
});
