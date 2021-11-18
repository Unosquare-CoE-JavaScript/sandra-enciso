/* from https://www.codewars.com/kata/5fee4559135609002c1a1841 */

class UrlShortener {
  constructor() {
    this.url = {};
    this.urlRedirect = {};
  }

  randomString() {
    let randomStr = "";
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 4; i++) {
      randomStr += abc.charAt(Math.floor(Math.random() * (26 - 0)) + 0);
    }
    return randomStr;
  }

  shorten(longURL) {
    let shortURL = this.url[longURL];
    if (!shortURL) {
      shortURL = this.randomString();
      this.urlRedirect[`short.ly/${shortURL}`] = longURL;
      this.url[longURL] = `short.ly/${shortURL}`;
      return `short.ly/${shortURL}`;
    } else {
      return shortURL;
    }
  }

  redirect(shortURL) {
    let longURL = this.urlRedirect[shortURL];
    return longURL;
  }
}
