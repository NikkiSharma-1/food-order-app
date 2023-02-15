import './Input.css';

const Input = (props) => {
  return (
    <div className='input'>
      <label htmlFor='input.id'>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;