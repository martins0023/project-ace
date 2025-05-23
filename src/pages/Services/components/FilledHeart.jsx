import React from 'react';

const FilledHeart = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.657L12 21.657l-8.828-8.828a4 4 0 010-5.657z"
      />
    </svg>
  )
}

export default FilledHeart