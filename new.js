let visitCount = localStorage.getItem('profileVisitCount');

if (!visitCount) {
    visitCount = 0;
}

visitCount = parseInt(visitCount) + 1;

localStorage.setItem('profileVisitCount', visitCount);

document.getElementById('visit-count').textContent = visitCount;
