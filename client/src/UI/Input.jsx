const Input = ({ label, id, textarea, ...props }) => {
  const classes = "w-64 p-2 rounded-md hover:border-white bg-neutral-950";

  return (
    <div className="flex flex-col flex-1 items-start my-2">
      <label htmlFor={id} className="text-sm font-medium mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} {...props} className={classes}></textarea>
      ) : (
        <input id={id} {...props} className={classes} />
      )}
    </div>
  );
};

export default Input;
