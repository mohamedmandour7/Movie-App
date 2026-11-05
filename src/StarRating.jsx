import { useState } from "react";

export default function StarRating({
  maxRating = 10,
  defaultRating = 0,
  color = "#fcc419",
  size = 48,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  function handleClick(i) {
    setRating(i);
    if (onSetRating) onSetRating(i);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ display: "flex" }}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span
            key={i}
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
            style={{ cursor: "pointer", width: size, height: size }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={(hoverRating || rating) > i ? color : "none"}
              stroke={color}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 .587l3.668 7.431 8.214 1.192-5.941 5.787 1.404 8.181L12 18.897l-7.345 3.88 1.404-8.18-5.94-5.788 8.213-1.192z"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
