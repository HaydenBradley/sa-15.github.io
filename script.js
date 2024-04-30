document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentItemIndex = 0;

    displayPortfolioItem(currentItemIndex);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('href').slice(1);
            filterPortfolio(category);
            toggleActiveClass(this);
            currentItemIndex = 0;
            displayPortfolioItem(currentItemIndex);
        });
    });
    prevBtn.addEventListener('click', function() {
        navigatePortfolio(-1);
    });

    nextBtn.addEventListener('click', function() {
        navigatePortfolio(1);
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

    function navigatePortfolio(direction) {
        portfolioItems[currentItemIndex].style.display = 'none';
        currentItemIndex += direction;
        if (currentItemIndex < 0) {
            currentItemIndex = portfolioItems.length - 1;
        } else if (currentItemIndex >= portfolioItems.length) {
            currentItemIndex = 0;
        }
        displayPortfolioItem(currentItemIndex);
    }

    function displayPortfolioItem(index) {
        portfolioItems[index].style.display = 'block';
    }
});
