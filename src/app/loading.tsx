import Spinner from '@/components/Spinner';

export default function loading() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
