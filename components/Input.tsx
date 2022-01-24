import React, { FC } from "react";
import classNames from "classnames";

export const Input: FC<IInputProps> = ({
  name,
  type = "text",
  label,
  placeholder,
  value,
  className,
  onChange,
  inputClassName,
  required,
  min,
  prefix,
  error,
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-top text-red-500">*</span>}
        </label>
      )}

      <div className="relative rounded-md">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        )}
        <input
          type={type}
          name={name}
          id={name}
          className={classNames(
            "block w-full rounded-md border-gray-200 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            {
              "mt-1": label,
              "pl-7": prefix,
              "border-red-500": error,
            },
            inputClassName
          )}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          min={min}
        />
      </div>
    </div>
  );
};

interface IInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  inputClassName?: string;
  value?: string | number;
  required?: boolean;
  min?: number;
  prefix?: string;
  error?: boolean | string;
}
