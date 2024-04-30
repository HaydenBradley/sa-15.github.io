document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('href').slice(1); 
            filterPortfolio(category);
            toggleActiveClass(this);
        });
    });

    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    }

    function toggleActiveClass(selectedBtn) {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        selectedBtn.classList.add('active');
    }
});
