import React, { useState } from "react";
import { CheckIcon, XCircleIcon } from '@heroicons/react/solid';

import IconButton from '../button';

const InputComp = ({
  label,
  callback,
  isLabelEnabled = false,
  defaultValue,
  cancelCallback
}: {
  label: string;
  callback: (input: string) => void;
  isLabelEnabled?: boolean;
  defaultValue: string;
  cancelCallback: () => void;
}) => {
  const [input, setInput] = useState(defaultValue);

  const handleInput = (e: any) => {
    setInput(e.target.value);
  }

  const getLable = () => {
    if (isLabelEnabled) {
      return (
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      );
    }
    return null;
  };

  const handleDone = () => {
    callback(input);
    setInput('');
  }

  const handleCancel = () => {
    setInput('');
    cancelCallback();
  }

  return (
    <div className="">
      {getLable()}
      <div className="mt-1">
        <input
          type="text"
          name={label}
          id={label}
          className="block w-full sm:text-sm px-2 py-2 border-b border-solid border-1 border-white bg-transparent text-white outline-none"
          placeholder={`Enter ${label} here`}
          onChange={handleInput}
          value={input}
        />
        <div className="flex flex-row justify-end mt-2">
          <IconButton onClick={handleDone}>
            <CheckIcon className="w-5 h-5 text-lime-600 hover:text-lime-400"/>
          </IconButton>
          <IconButton onClick={handleCancel}>
            <XCircleIcon className="w-5 h-5 text-red-600 hover:text-red-400"/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default InputComp;
