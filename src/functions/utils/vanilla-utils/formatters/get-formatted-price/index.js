import * as R from "ramda";

const NUMBERS_AFTER_ZERO = 4;

const hasZeroAfterDot = (price) => /0[.,](0+)[0-9]+/.test(price);

const getCountAfterDot = (price) =>
  price.toString().match(/0[.,](0*)[0-9]+/)[1].length + NUMBERS_AFTER_ZERO;

const getFormattedPrice = (price, ticker) => {
  if (R.isNil(price)) return;

  if (hasZeroAfterDot(price)) {
    const countAfterDot = getCountAfterDot(price);

    return new Intl.NumberFormat(`en-US`, {
      minimumFractionDigits: countAfterDot,
      maximumFractionDigits: countAfterDot,
    }).format(price);
  }

  const options = formaterOptions[ticker] || minFraction;
  const formattedPrice = new Intl.NumberFormat(`en-US`, options).format(price);

  return formattedPrice;
};

const maxFraction = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 8,
};

const minFraction = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const nullableFraction = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

const formaterOptions = {
  btc: maxFraction,
  usdt: minFraction,
  number: nullableFraction,
};

export default getFormattedPrice;
