import test from "./data.json?raw";

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    console.log("개발모드");
    return JSON.parse(test);
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    return response.json();
  }
}

async function main() {
  const products = await getProducts();

  console.log(products);
  document.querySelector(".products").innerHTML = products
    .map(
      (product) =>
        `
    <div class="product">
        <img src="${product.images[0]}" />
        <p class="text-blue-300">${product.name}</p>
        <span class="text-blue-300">'가격  ${product.regularPrice}'</span>
        <button type="button" class="bg-green-300 ">+</button>
      
        <button type="button" class="bg-green-300 py-10 px-30 rounded-full hover:bg-green-400 text-green-800">-</button>
     
       
     
    </div>
    `
    )
    .join("");
}
main();
