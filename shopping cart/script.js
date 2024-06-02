document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.card-body');

    items.forEach(item => {
        const incrementBtn = item.querySelector('.fa-plus-circle');
        const decrementBtn = item.querySelector('.fa-minus-circle');
        const deleteBtn = item.querySelector('.fa-trash-alt');
        const likeBtn = item.querySelector('.fa-heart');
        const quantitySpan = item.querySelector('.quantity');
        const totalPriceSpan = document.querySelector('.total');

        let unitPrice = parseInt(item.querySelector('.unit-price').textContent.slice(0, -2));
        let total = parseInt(totalPriceSpan.textContent);

        incrementBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            total += unitPrice;
            totalPriceSpan.textContent = total + ' $';
        });

        decrementBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                total -= unitPrice;
                totalPriceSpan.textContent = total + ' $';
            }
        });

        deleteBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            total -= quantity * unitPrice;
            totalPriceSpan.textContent = total + ' $';
            item.parentNode.removeChild(item);
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });
});
