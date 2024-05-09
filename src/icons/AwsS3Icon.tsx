function AwsS3Icon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" fill="#fff" rx="15%"></rect>
      <path fill="#e05243" d="M260 348l-137 33V131l137 32z"></path>
      <path fill="#8c3123" d="M256 349l133 32V131l-133 32v186"></path>
      <g fill="#e05243">
        <path
          id="a"
          d="M256 64v97l58 14V93zm133 67v250l26-13V143zm-133 77v97l58-8v-82zm58 129l-58 14v97l58-29z"
        ></path>
      </g>
      <use fill="#8c3123" transform="rotate(180 256 256)" xlinkHref="#a"></use>
      <path fill="#5e1f18" d="M314 175l-58 11-58-11 58-15 58 15"></path>
      <path fill="#f2b0a9" d="M314 337l-58-11-58 11 58 16 58-16"></path>
    </svg>
  );
}

export default AwsS3Icon;
