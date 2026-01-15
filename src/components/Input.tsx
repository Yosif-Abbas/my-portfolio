import React, { SetStateAction } from 'react';

type Props = {
  id: string;
  label: string;
  type: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  required?: boolean;
};

export default function Input({
  value,
  setValue,
  isLoading,
  id,
  label,
  type,
  required = false,
}: Props) {
  return (
    <>
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          required={required}
          id={id}
          value={value}
          minLength={required ? 3 : 0}
          onChange={(e) => setValue(e.target.value)}
          className="input"
          disabled={isLoading}
        />
      ) : (
        <input
          required={required}
          type={type}
          id={id}
          value={value}
          minLength={required ? 3 : 0}
          onChange={(e) => setValue(e.target.value)}
          className="input"
          disabled={isLoading}
        />
      )}
    </>
  );
}
