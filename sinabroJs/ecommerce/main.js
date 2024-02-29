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
        <p>${product.name}</p>
        <div class="desc">
        <span>'가격  ${product.regularPrice}'</span>
        <div>
        <button type="button" class="plus">+</button>
        <span class="num">0</span>
        <button type="button" class="minus">-</button>
        <span class="num">0</span>
        </div>
       
        </div>
    </div>
    `
    )
    .join("");
}
main();
