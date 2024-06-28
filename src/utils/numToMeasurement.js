export const isPercentage = (val) =>
  typeof val === "string" && val.indexOf("%") > -1;

export const percentToPx = (value, comparativeValue) => {
  if (!value || typeof value !== "string") return value;
  if (value.indexOf("px") > -1 || value === "auto" || !comparativeValue)
    return value;
  const percent = parseInt(value);
  return (percent / 100) * comparativeValue + "px";
};

export const pxToPercent = (value, comparativeValue) => {
  if (!comparativeValue) return 0;
  const val = (Math.abs(value) / comparativeValue) * 100;
  if (value < 0) return -1 * val;
  else return Math.round(val);
};

export const getElementDimensions = (element) => {
  if (!element) return { width: 0, height: 0 };
  const computedStyle = getComputedStyle(element);

  let height = element.clientHeight,
    width = element.clientWidth; // width with padding

  height -=
    parseFloat(computedStyle.paddingTop) +
    parseFloat(computedStyle.paddingBottom);
  width -=
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  return {
    width,
    height,
  };
};
