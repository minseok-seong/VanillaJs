import { goto } from "../router";

export function renderIndex() {
  document.querySelector("#app").innerHTML = ` <h1>영화 검색</h1>
    <form>
      <input type="search" placeholder="영화검색" name="query"/>
      <button type="submit">검색</button>
    </form>
    `;

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    goto(`/search?query= ${e.target.query.value}`, { push: true }); //이게 준비되지 않음
  });
}
