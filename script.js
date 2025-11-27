// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Add interactivity to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real app, this would navigate to the relevant section
            console.log(`Clicked on ${this.querySelector('h3').textContent}`);
        });
    });
    
    // Add functionality to action buttons
    const approveButtons = document.querySelectorAll('.btn-approve');
    const denyButtons = document.querySelectorAll('.btn-deny');
    const replyButtons = document.querySelectorAll('.btn-reply');
    
    approveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.pending-item');
            item.style.opacity = '0.5';
            setTimeout(() => {
                item.remove();
                updatePendingCounts();
            }, 500);
        });
    });
    
    denyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.pending-item');
            item.style.opacity = '0.5';
            setTimeout(() => {
                item.remove();
                updatePendingCounts();
            }, 500);
        });
    });
    
    replyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('Reply functionality would open a message composer in a real application.');
        });
    });
    
    function updatePendingCounts() {
        // In a real app, this would update the counts from the server
        const pendingApprovals = document.querySelector('.pending-approvals .count');
        const currentCount = parseInt(pendingApprovals.textContent);
        if (currentCount > 0) {
            pendingApprovals.textContent = currentCount - 1;
        }
    }
    
    function initCharts() {
        // Budget vs Spending Chart
        const budgetCtx = document.getElementById('budgetChart').getContext('2d');
        const budgetChart = new Chart(budgetCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Budget',
                        data: [12000, 19000, 15000, 18000, 12000, 15000],
                        backgroundColor: 'rgba(46, 125, 50, 0.7)',
                        borderColor: 'rgba(46, 125, 50, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Spending',
                        data: [10000, 12000, 14000, 11000, 9000, 13000],
                        backgroundColor: 'rgba(244, 67, 54, 0.7)',
                        borderColor: 'rgba(244, 67, 54, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    }
                }
            }
        });
        
        // Procurement by Category Chart
        const categoryCtx = document.getElementById('categoryChart').getContext('2d');
        const categoryChart = new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Books', 'Furniture', 'ICT', 'Lab Equipment', 'Uniforms', 'Services'],
                datasets: [{
                    data: [25, 15, 20, 18, 12, 10],
                    backgroundColor: [
                        'rgba(46, 125, 50, 0.8)',
                        'rgba(76, 175, 80, 0.8)',
                        'rgba(129, 199, 132, 0.8)',
                        'rgba(244, 67, 54, 0.8)',
                        'rgba(255, 152, 0, 0.8)',
                        'rgba(33, 150, 243, 0.8)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});