import React from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function ContactError({
  setStatusCode,
}: {
  setStatusCode: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <FaXmark size={120} color="red" />
        <h3 className="text-2xl">Sorry, NAME</h3>
      </div>
      <p>
        Your message was not delivered,{' '}
        <span className="text-link" onClick={() => setStatusCode(0)}>
          try again
        </span>
      </p>
    </div>
  );
}
