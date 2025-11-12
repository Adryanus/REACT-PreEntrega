const BASE_URL = "https://690a73ce1a446bb9cc2295d4.mockapi.io/products";

const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error("Error creando producto");
    }
    const result = await response.json();
    return result;
}
export {createProduct}

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url += `?category=${category}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching products");
    }
    return await response.json();
}