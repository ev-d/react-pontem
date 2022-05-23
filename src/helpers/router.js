class Router {
  #history = window.history;
  #location = window.location;

  addSearch(searchParams) {
    const path = this.#location.pathname;
    this.#history.pushState({}, '', `${path}?${searchParams.toString()}`)
  }

  getSearchParams() {
    return this.#location.search;
  }

  getLocation() {
    return this.#location.href;
  }
}

const router = new Router();
export default router;
