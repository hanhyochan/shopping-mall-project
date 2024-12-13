export const favoriteProducts = state => state.favorites.favoriteProducts;
export const isFavoriteProducts = (state, productId) => state.favoriteProducts.includes(productId)