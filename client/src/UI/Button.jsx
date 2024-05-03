const Button = ({ children, textonly, underline, ...props }) => {
  let cssClass =
    "px-5 py-3 bg-slate-200 rounded-full text-black font-semibold hover:scale-105 transition-all";

  if (textonly) {
    cssClass =
      "px-5 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all";
  }

  if (underline) {
    cssClass =
      "px-5 py-3 rounded-full text-white font-semibold underline hover:text-purple-500 transition-all";
  }

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
