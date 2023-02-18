import httpClient from "../clients/exhausterHttpClient";

export default class AuthorArticleService {
  static async getMachines() {
    const response = await httpClient()
      .get("sinter_machines")
      .catch((err) => {
        return err;
      });
    return response.data;
  }

  static async getExhauserStatById(id, time_machine_offset = null) {
    if (time_machine_offset) {
      params = new URLSearchParams([
        ["time_machine_offset", time_machine_offset],
      ]);
    }
    const response = await httpClient()
      .get(`sinter_machines/${id}`)
      .catch((err) => {
        return err;
      });
    return response;
  }
}
