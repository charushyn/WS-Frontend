export type PortfolioCardType = {
  images: Array<string>;
  id: number;
  title: string;
  url: string;
  warnings: {
    text: string;
    items: Array<string>;
  };
  description: Array<string>;
};
