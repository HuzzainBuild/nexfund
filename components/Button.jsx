import Link from "next/link";

const Button = ({ type, title, href, className }) => {
  if ((type = "btn")) {
    return (
      <button
        className={`bg-purple-800 text-white font-semibold hover:bg-purple-900 py-3 px-5 ${className}`}
      >
        <span>{title}</span>
      </button>
    );
  } else {
    return (
      <Link href={href}>
        <button
          className={`bg-purple-800 text-white font-semibold hover:bg-purple-900 py-3 px-5 ${className}`}
        >
          <span>{title}</span>
        </button>
      </Link>
    );
  }
};

export default Button;
