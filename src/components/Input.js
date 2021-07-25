export default function Input({
  label,
  register,
  required,
  type,
  placeholder,
  name,
  errors,
  errorMessage,
  width,
  ...otherProps
}) {
  return (
    <div className=''>
      <label className='text-sm my-2' htmlFor={name}>
        {label}
      </label>
      <div className='relative md:w-full mb-6 mt-2'>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: required,
          })}
          id={name}
          required={required}
          className={`border ${
            errors[name] ? 'border-red' : 'border-black'
          } w-${width ? width : 'full'} text-sm rounded-full px-4 py-2 focus:outline-none focus:shadow-xl`}
          {...otherProps}
        />
        <div className='text-red-500'>
          {errors[name] && (errorMessage || errors[name])}
        </div>
      </div>
    </div>
  );
}
