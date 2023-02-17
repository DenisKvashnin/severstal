import httpClient from "../clients/exhausterHttpClient";
export default class AuthorArticleService {
  static async getMachines() {
    const response = await httpClient()
      .get("sinter_machines")
      .catch((err) => {
        return err;
      });
    return response;
  }
}
