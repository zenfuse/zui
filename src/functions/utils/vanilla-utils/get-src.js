export const getSrc = (image) => {
  if (typeof image === "string") {
    return image;
  }
  return image && image.full ? image.full : "/";
};
