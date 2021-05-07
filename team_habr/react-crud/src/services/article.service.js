import http from "../http-common";

class ArticleDataService {
  getAll() {
    return http.get("/articles/");
  }

  get(slug) {
    return http.get(`/articles/${slug}`);
  }

  create(data) {
    return http.post("/articles", data);
  }

  update(id, data) {
    return http.put(`/articles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/articles/${id}`);
  }

  deleteAll() {
    return http.delete(`/articles`);
  }

  findByTitle(title) {
    return http.get(`/articles?title=${title}`);
  }
}

export default new ArticleDataService();