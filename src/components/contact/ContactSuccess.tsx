import { FcCheckmark } from 'react-icons/fc';

export default function ContactSuccess({ name }: { name: string }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <FcCheckmark size={120} />
        <h3 className="text-2xl">Thank You{name ? ', ' + name : ''}</h3>
      </div>
      <p>Your message was delivered successfully.</p>
    </div>
  );
}
