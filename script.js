function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('open');
}

function toggleJobDetails(jobElement) {
    const jobDetails = jobElement.querySelector('ul');
    jobDetails.style.display = jobDetails.style.display === 'block' ? 'none' : 'block';
}
