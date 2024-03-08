import { renderIndex } from "./pages";
import { renderSearch } from "./pages/search";

const routes = {
  "/": renderIndex,
  "/search": renderSearch,
};

window.addEventListener("popstate", (e) => {
  const pathname = location.pathname;
  if (routes[pathname]) {
    // history.pushState({}, "", url);
    routes[pathname]();
    return;
  }

  console.log(url);
});

export const goto = (url, { push } = {}) => {
  const pathname = url.split("?")[0];
  const param = Object.fromEntries(new URLSearchParams(url.split("?")[1]));
  if (routes[pathname]) {
    if (push) {
      history.pushState({}, "", url);
    }

    routes[pathname]({
      searchParams: param,
    });
    return;
  }
  location.href = url;
  console.log(url);
};
