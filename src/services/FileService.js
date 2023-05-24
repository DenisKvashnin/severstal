import CoreHTTP from "../clients/coreHTTPClient";

export default {
  async uploadFile(file) {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file)
    return await CoreHTTP.post('ds_files2', bodyFormData)
  },
  async getFiless() {
    return await CoreHTTP.get('ds_files')
  }
}
