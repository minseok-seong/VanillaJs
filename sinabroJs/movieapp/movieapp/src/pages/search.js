export function renderSearch({ searchParams }) {
  document.querySelector("#app").innerHTML = `
    <h1>Search page</h1>
    <p>${searchParams.query}</p>`;
}
