import React from "react";

type StarProps = {
  filled?: boolean;   // 꽉 찬 별
  half?: boolean;     // 반쪽 별
  onClick?: () => void;
};

export default function Star({ filled, half, onClick }: StarProps) {
  if (half) {
    // 반쪽 별 (왼쪽 반만 채워짐)
    return (
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="url(#halfGradient)"
        stroke="currentColor"
        strokeWidth="1"
        width="28"
        height="28"
        style={{ cursor: "pointer" }}
      >
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#ddd" />
          </linearGradient>
        </defs>
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 
        1.417 8.268L12 19.896l-7.417 3.968L6 15.596 
        0 9.748l8.332-1.73z" />
      </svg>
    );
  }

  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#facc15" : "#ddd"}
      stroke="currentColor"
      strokeWidth="1"
      width="28"
      height="28"
      style={{ cursor: "pointer" }}
    >
      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 
      1.417 8.268L12 19.896l-7.417 3.968L6 15.596 
      0 9.748l8.332-1.73z" />
    </svg>
  );
}
