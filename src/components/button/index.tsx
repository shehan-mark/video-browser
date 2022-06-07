import React from 'react';

const IconButton = ({
  children,
  onClick
}: {
  children: any;
  onClick: () => void;
}) => {

  return (
    <div className="w-fit p-2 rounded text-black cursor-pointer mx-1 bg-sky-900 hover:bg-sky-700" onClick={onClick}>
      {children}
    </div>
  )
}

export default IconButton;
