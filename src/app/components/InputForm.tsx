import { useState, useRef } from 'react';

interface InputFormProps {
  placeholder: string;
  onSubmit: (value: string) => void;
  onChange?: (value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ placeholder, onSubmit, onChange }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="flex items-center border border-gray-500 rounded-2xl p-2 w-full max-w-md bg-darkBg" 
      onClick={handleFocusInput}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
              className="flex-grow outline-none bg-transparent text-gray-300 px-4 pr-10"
      />
      <button
        onClick={handleSubmit}
        className={`ml-2 p-2 rounded-full ${value.trim() ? 'bg-gray-500' : 'bg-gray-400'} text-white`}
        disabled={!value.trim()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
};

export default InputForm;
