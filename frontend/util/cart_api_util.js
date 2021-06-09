export const fetchCart = () => (
    $.ajax({
        url: '/api/cart'
    })
);