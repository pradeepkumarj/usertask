export class FrontEndConfig {
  constructor() { }
  serverurl = 'http://localhost:8080';
  /**
   * @output To return server url
   */
  getServerUrl() {
    return this.serverurl;
  }
}
