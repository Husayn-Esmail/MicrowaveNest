import http from '../http-common';

class MessageDataService {
  get() {
    return http.get('/');
  }

  changeMessage(message) {
    return http.post('/', message);
  }
}

export default new MessageDataService();
