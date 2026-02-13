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

    {/* Hexagon background */}
    <path
      d="M60 4L110 30V90L60 116L10 90V30L60 4Z"
      fill="url(#logoGrad)"
    />

    {/* Inner hexagon cutout */}
    <path
      d="M60 14L102 36V84L60 106L18 84V36L60 14Z"
      fill="var(--bg-secondary, #1e293b)"
    />

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

    {/* Accent dot */}
    <circle cx="100" cy="24" r="5" fill="#38bdf8" opacity="0.8" />
  </svg>
);

export default Logo;
