const InputBox = ({ type, name, value, placeholder, onChange, ...rest}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`border p-2 rounded w-full border-black mb-5 ${rest.className}`}
    />
  );
};

export default InputBox;
