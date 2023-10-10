// Array of available nodes to connect to
export const nodes = [
  "https://rpc.xignalscan.io",
  "https://bsc-dataseed1.defibit.io",
  "https://bsc-dataseed.binance.org",
];

const getRandomIndex = () => {
  const lower = 0;
  const upper = nodes.length - 1;
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getNodeUrl = (): string => {
  const randomIndex = getRandomIndex();
  return nodes[randomIndex];
};

export default getNodeUrl;
