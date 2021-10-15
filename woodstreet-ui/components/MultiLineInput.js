/*
  @author Deep
  @contributor 
*/
import { forwardRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import { useField } from 'formik';

const MultiLineInput = forwardRef(
  ({ className, label = false, ...props }, ref) => {
    const [field, meta] = useField(props);

    const errorClasses =
      meta.touched && meta.error
        ? 'border-error bg-inputGray-error'
        : 'border-mineShaft focus:placeholder-secondary focus:border-inputGray focus:bg-inputGray';

    return (
      <>
        {label && (
          <label className='text-primary text-sm font-bold'>{label}</label>
        )}
        <textarea
          ref={ref}
          className={`w-full p-2 outline-none text-sm font-normal border border-mineShaft text-mineShaft placeholder-mineShaft focus:border-inputGray focus:placeholder-secondary focus:bg-inputGray ${errorClasses} ${className} transition-all duration-200`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className='flex flex-row items-center text-error'>
            <ExclamationCircleIcon width={24} height={24} />
            <p className='text-center text-sm font-bold pl-2'>{meta.error}</p>
          </div>
        ) : null}
      </>
    );
  }
);

export default MultiLineInput;
