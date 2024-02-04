import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({
  max = 10,
  color = "yellow",
  onRatingSelect,
  selectedMovieRating,
  onRatingClick,
}) => {
  const [tempSelectedRatingIndex, setTempSelectedRatingIndex] = useState(0);
  return (
    <div className="bg-[#343a40] m-8 p-4 py-7 rounded-xl">
      <div className="flex justify-center mb-5">
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            isFilled={
              tempSelectedRatingIndex
                ? index + 1 <= tempSelectedRatingIndex
                : index + 1 <= selectedMovieRating
            }
            onRatingSelect={onRatingSelect}
            pos={index}
            onHoverRating={setTempSelectedRatingIndex}
            color={color}
          />
        ))}

        <span className="px-5">
          {tempSelectedRatingIndex
            ? tempSelectedRatingIndex
            : selectedMovieRating}
        </span>
      </div>
      {selectedMovieRating !== 0 && (
        <div className="flex justify-center">
          <button
            className="text-white bg-[#6741d9] w-[80%] py-2 text-center rounded-3xl hover:bg-[#7950f2]"
            onClick={onRatingClick}
          >
            + Add to list
          </button>
        </div>
      )}
    </div>
  );
};

export default StarRating;
