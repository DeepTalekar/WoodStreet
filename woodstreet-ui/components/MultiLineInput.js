function MultiLineInput(props) {
  return (
    <textarea
      className={`w-full p-2 outline-none text-sm font-normal border border-mineShaft text-mineShaft placeholder-mineShaft focus:border-inputGray focus:placeholder-secondary focus:bg-inputGray ${props.className} transition-all duration-200`}
      type='text'
      placeholder={props.placeholder}
    />
  );
}

export default MultiLineInput;
