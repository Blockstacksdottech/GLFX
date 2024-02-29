import yahooFinance from "yahoo-finance2";

const symbols = ["EURUSD=X"];

const formatResp = (data) => {
  let res = data.map((e, i) => {
    return {
      price: e.regularMarketPrice,
      symbol: e.symbol,
    };
  });
  return res;
};

export default async function handler(req, resp) {
  let data = await yahooFinance.quote(symbols);
  resp.status(200).json(formatResp(data));
}
