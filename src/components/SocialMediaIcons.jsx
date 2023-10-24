import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1z"
          />
          <path
            d="M4 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
          />
          <path
            d="M4 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
          />
          <path
            d="M4 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
          />
        </svg>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-twitter"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.539 4.487a4.5 4.5 0 0 1-4.322-3.305 5.5 5.5 0 0 1-2.374 4.13 5.5 5.5 0 0 1-8.845-4.864 3.5 3.5 0 0 0-1.932.53 3.5 3.5 0 0 0-.92 4.89 9.992 9.992 0 0 0 7.256 3.937 4.968 4.968 0 0 0 .602-.037 3.5 3.5 0 0 0 3.438-3.016 5.5 5.5 0 0 1-3.985 2.052 4.982 4.982 0 0 0 2.52-.864 5 5 0 0 1-2.258 2.604 4.98 4.98 0 0 0 1.446-.54"
          />
        </svg>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M9.26 1.978h1.767a.736.736 0 0 1 .737.737v1.767a.736.736 0 0 1-.737.737H9.26v1.75h1.767a.736.736 0 0 1 .737.737v1.767a.736.736 0 0 1-.737.737H9.26V9.29h1.767a.736.736 0 0 1 .737.737v1.767a.736.736 0 0 1-.737.737H9.26l.018 1.75h1.767a.736.736 0 0 1 .737.737v1.767a.736.736 0 0 1-.737.737H9.26l.018 2.13a.736.736 0 0 1-.737.737H7.493a.736.736 0 0 1-.737-.737l-.02-2.13H5.717a.736.736 0 0 1-.737-.737l.02-1.767H7.5V9.29H5.717a.736.736 0 0 1-.737-.737l-.02-1.767H7.5V5.746c0-.775.637-1.412 1.412-1.412z"
          />
        </svg>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8zm0 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm1 2.987V4a1 1 0 0 1 1 1v1.987a1 1 0 0 1-1 1V3.987a1 1 0 0 1 1 1zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 8.052V4.01a2 2 0 0 0-2-2H5.01a2 2 0 0 0-2 2v10.038a2 2 0 0 0 2 2h5.988a2 2 0 0 0 2-2z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
