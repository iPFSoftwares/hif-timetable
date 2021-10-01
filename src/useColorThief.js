import { useState, useEffect } from "react";
import ColorThief from "colorthief";

export const getPalette = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject();
    }
    const image = new Image();
    image.src = url;
    image.crossOrigin = 'Anonymous';

    image.onload = function () {
      try {
        const colorThief = new ColorThief();
        let result = colorThief.getColor(this, 25);
        if(result)
          result = `rgba(${result.join(',')},1)`;
        else
        result = "rgba(67, 55, 201,1)";
        console.log("Main color: ", result);
        resolve(result);
      } catch (error) {
        resolve("rgba(67, 55, 201, 1)");
      }
    }
  });
}

const useColorThief = (url) => {
  const [color, setColor] = useState("rgba(152, 167, 249, 1)");

  useEffect(() => {
    getPalette(url)
      .then(setColor)
      .catch(() => setColor("rgba(67, 55, 201, 1)"));
  }, [url]);

  return color;
}

export default useColorThief;