import httpClient from "../clients/exhausterHttpClient";

export default class AspiratorService {
  static async getAspirator(id) {
    const response = await httpClient()
      .get(`aspirators/${id}`)
      .catch((err) => {
        return err;
      });
    return response;
  }
}
