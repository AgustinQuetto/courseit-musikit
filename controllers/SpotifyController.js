const Axios = require("axios");
const querystring = require("querystring");

class SpotifyController {
  constructor(clientId, secretId, redirect_uri) {
    this.clientId = clientId;
    this.secretId = secretId;
    this.redirect_uri = redirect_uri;
  }

  async login(code) {
    const spotifyUrl = "https://accounts.spotify.com/api/token";

    const params = {
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(
            `${this.clientId}:${this.secretId}`,
            "utf-8"
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    try {
      const login = await Axios.post(
        spotifyUrl,
        querystring.stringify({
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:3000/",
          code: code
        }),
        params
      );
      return login.data;
    } catch (e) {
      console.log(e);
      return { error: "spotify login error" };
    }
  }
}

module.exports = SpotifyController;
