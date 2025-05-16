"use client";

import { useEffect, useState } from "react";

const ImageFallback = (props: any) => {
  const { src, fallback, alt = "", ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
