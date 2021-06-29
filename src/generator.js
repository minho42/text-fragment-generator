const axios = require("axios");
const cheerio = require("cheerio");

const generator = async ({ url, selector }) => {
  return new Promise(async function (resolve, reject) {
    try {
      if (!url || !selector) resolve({ error: "must provide url and selector" });
      if (url.endsWith("/")) {
        url.slice(0, -1);
      }

      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const result = $(selector).text();
      const uri = `${url}#:~:text=${result}`;
      resolve(uri);
    } catch (e) {
      console.error(e);
      reject(new Error(e));
    }
  });
};

module.exports = generator;
