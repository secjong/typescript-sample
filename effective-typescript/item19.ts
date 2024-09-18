const cache: { [ticker: string]: number } = {};

function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    return Promise.resolve(cache[ticker]);
  }
  return fetch(`https://quotes.example.com?q=${ticker}`)
    .then((response) => response.json())
    .then((quote) => {
      cache[ticker] = quote;
      return quote;
    });
}

function fetchQuote() {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random >= 0.95) {
        reject(0);
      } else {
        const response = 9999;
        resolve(response);
      }
    }, 1000);
  });
}

getQuote("aaa");
getQuote("bbb");
getQuote("aaa");
