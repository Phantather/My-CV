import React from 'react';

const Logo = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
    </defs>

    {/* Circle background */}
    <circle cx="60" cy="60" r="56" fill="url(#logoGrad)" />

    {/* Inner circle cutout */}
    <circle cx="60" cy="60" r="48" fill="var(--bg-secondary, #1e293b)" />

    {/* Letter A */}
    <path
      d="M30 88L50 32H56L76 88H69L64 74H42L37 88H30ZM44 68H62L53 40L44 68Z"
      fill="url(#logoGrad)"
    />

    {/* Letter K */}
    <path
      d="M72 32H78V56L98 32H106L86 56L107 88H99L82 60L78 65V88H72V32Z"
      fill="url(#logoGrad)"
    />
  </svg>
);

export default Logo;
