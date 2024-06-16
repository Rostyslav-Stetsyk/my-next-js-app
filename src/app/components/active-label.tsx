import clsx from 'clsx';
import React from 'react';

export enum Status {
  active = 'active',
  notActive = 'notActive',
  pending = 'pending',
  suspended = 'suspended',
}

interface ActiveLabelProps {
  children: React.ReactNode;
  status: Status;
}

export const ActiveLabel = ({ children, status }: ActiveLabelProps) => {
  return (
    <span
      className={clsx([
        'py-1 px-3.5 r-28px rounded-3xl text-sm font-medium inline-flex items-center gap-2',
        status === Status.notActive && 'bg-red-100 text-red-700',
        status === Status.active && 'bg-green-100 text-green-700',
        status === Status.pending && 'bg-orange-100 text-orange-700',
        status === Status.suspended && 'bg-blue-100 text-blue-700',
      ])}
    >
      <span className="h-1 w-1 rounded-full bg-current"></span>
      {children}
    </span>
  );
};
