/*
  @author Deep
  @contributor 
*/

export default function SectionHeader(props) {
  return (
    <section className='py-11 px-4%'>
      <h2 className='text-primary text-3xl font-semibold mb-4'>
        {props.title}
      </h2>
      <p>{props.subtitle}</p>
    </section>
  );
}
