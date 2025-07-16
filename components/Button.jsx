import Link from "next/link";

const Button = ({ type, title, href, className, handleClick, disabled }) => {
  if ((type = "btn")) {
    return (
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`gradient_bg text-white font-semibold hover:bg-purple-900 py-3 px-5 ${className} rounded-md`}
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
