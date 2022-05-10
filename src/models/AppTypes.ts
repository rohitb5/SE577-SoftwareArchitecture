export type ChildCardType = {
  name: string;
  info: string;
  link1: string;
  link2: string;
};


export type BCApiResponse = {
  blockHash: string;
  blockId: string;
  executionTimeMs: number;
  found: boolean;
  nonce: number;
  parentHash: string;
  query: string;
};