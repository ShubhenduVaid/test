export interface TradeResponse {
  status: string;
  data: TradeObject[];
}

export interface TradeObject {
  buy: string;
  sell: string;
  pair: string;
}

