import { mockedProductsBeer } from "../data";

export function BeerCount() {
  const totalBeerCount = mockedProductsBeer.map((p) => p.count * p.price);
  const totalBeerSum = totalBeerCount.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  console.log(totalBeerSum);
  return totalBeerSum;
}

export default BeerCount;
