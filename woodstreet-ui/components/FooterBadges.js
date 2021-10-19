/*
  @author Deep
  @contributor 
*/

function FooterBadges(props) {
  return (
    <div className='flex flex-col justify-between items-center w-80 h-24 bg-transparent'>
      <div className='flex justify-center items-center w-12 h-12 rounded-3xl bg-primary'>
        {props.icon}
      </div>
      <h2 className='text-primary font-bold text-xl'>{props.title}</h2>
    </div>
  );
}

export default FooterBadges;
