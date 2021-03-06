export const postCartItem = cartItem => (
    $.ajax({
        method: 'POST',
        url: '/api/cart_items',
        data: { cartItem }
    })
);

export const updateCartItem = cartItem => (
    $.ajax({
        method: 'PATCH',
        url: `/api/cart_items/${cartItem.id}`,
        data: { cartItem }
    })
);

export const deleteCartItem = cartItemId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartItemId}`
    })
);