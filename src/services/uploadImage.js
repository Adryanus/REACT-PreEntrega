// src/utils/uploadImage.js
export default async function uploadImage(file) {
  console.log("Simulando carga de imagen:", file?.name);
  // simulamos una URL temporal
  return Promise.resolve("https://via.placeholder.com/300");
}
