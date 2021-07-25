const CheckMark = ({ id, name, state, handleChange }) => (
  <div className='relative inline-flex my-4 items-center'>
    <input
      type='checkbox'
      name={id}
      checked={state[id]}
      onChange={handleChange}
      id={id}
      className='cursor-pointer mr-2'
    />
    <label
      htmlFor={id}
      className={`leading-none cursor-pointer text-sm ${
        state[id] ? 'text-gray-900' : 'text-gray-400'
      }`}
    >
      {name}
    </label>
  </div>
);
export default function Category({ categories, handleCheckbox }) {
  return (
    <div className='border-r w-44'>
      <h4 className='text-purple-500 text-lg'>Category</h4>
      <div className='my-4 flex flex-col'>
        <CheckMark
          handleChange={handleCheckbox}
          id='all'
          state={categories}
          name='All'
        />
        <CheckMark
          handleChange={handleCheckbox}
          id='shopping'
          state={categories}
          name='Shopping'
        />
        <CheckMark
          handleChange={handleCheckbox}
          id='delivery'
          name='Delivery'
          state={categories}
        />
        <CheckMark
          handleChange={handleCheckbox}
          id='tickets'
          state={categories}
          name='Tickets'
        />
        <CheckMark
          handleChange={handleCheckbox}
          id='giftcard'
          state={categories}
          name='Giftcard'
        />
      </div>
    </div>
  );
}
