import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type KeyProps = HTMLAttributes<HTMLDivElement>;

const Key = ({ children, className, ...otherProps }: KeyProps) => {
  return (
    <div
      className={twMerge(
        'size-14 bg-neutral-300 inline-flex justify-center items-center rounded-2xl text-xl text-neutral-950',
        className
      )}
      {...otherProps}>
      {children}
    </div>
  );
};

export default Key;
