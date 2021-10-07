/*
  @author Deep
  @contributor 
*/

export default function ProductBadge(props) {
  return (
    <div
      className={`px-5 py-2 border text-center ${
        props?.onSale ? 'bg-badge-sale' : 'bg-badge-sold'
      }`}>
      <p className='text-white font-semibold text-sm'>
        {props?.onSale ? 'Sale' : 'Sold Out'}
      </p>
    </div>
  );
}
