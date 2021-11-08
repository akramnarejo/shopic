import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";

export default function Photos() {
  const { photos, isItemAdded, selectItem } = useContext(Context);

  const resizeImg = (i) => {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  };

  return (
    <div className="photos">
      {photos.map((img, ind) => (
        <Image
          key={img.id}
          img={img}
          isItemAdded={isItemAdded}
          selectItem={selectItem}
          className={resizeImg(ind)}
        />
      ))}
    </div>
  );
}
