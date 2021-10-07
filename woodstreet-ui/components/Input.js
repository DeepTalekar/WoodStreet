/*
  @author Deep
  @contributor 
*/

function Input(props) {
  return (
    <input
      className={`w-full p-2 outline-none text-mineShaft text-sm font-normal placeholder-mineShaft border border-mineShaft focus:placeholder-secondary focus:border-inputGray focus:bg-inputGray ${props.className} transition-all duration-200`}
      type={!props?.type ? 'text' : props.type}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
