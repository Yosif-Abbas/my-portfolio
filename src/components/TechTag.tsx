// const techColors: Record<string, string> = {
//   React: 'bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/30',
//   'TanStack Query': 'bg-[#FF4154]/20 text-[#FF4154] border-[#FF4154]/30',
//   Tailwind: 'bg-[#38BDF8]/20 text-[#38BDF8] border-[#38BDF8]/30',
//   'styled-components': 'bg-[#DB7093]/20 text-[#DB7093] border-[#DB7093]/30',
//   Supabase: 'bg-[#3ECF8E]/20 text-[#3ECF8E] border-[#3ECF8E]/30',
//   'Next.js': 'bg-black/10 text-black dark:text-white dark:bg-white/10 border-black/10',
// };

const techColors: Record<string, string> = {
  React: '#61DAFB',
  'TanStack Query': '#FF4154',
  Tailwind: '#38BDF8',
  Supabase: '#3ECF8E',
  Formik: '#0277BD',
  'Framer Motion': '#E70FAA',
  Recharts: '#8884D8',
  // 'Next.js': '#000000',
  'Node.js': '#68A063',
  // Express: '#000000',
  MongoDB: '#47A248',
  Mongoose: '#880000',
  // Mongoose: '#A58B6F',
  Redis: '#D82C20',
  Stripe: '#635BFF',
  TypeScript: '#3178C6',
  Swagger: '#85EA2D',
  // JWT: '#000000',
  NextAuth: '#3B82F6',
  'React Day Picker': '#FFB400',
  'styled-components': '#DB7093',
};

export function TechTag({ tag }: { tag: string }) {
  return (
    <div>
      <span
        key={tag}
        style={{
          backgroundColor: techColors[tag] ? `${techColors[tag]}20` : '#000000', // translucent background
          color: techColors[tag],
          borderColor: `${techColors[tag]}40`,
        }}
        className={`px-1.5 py-1 text-xs font-medium rounded-full text-nowrap`}
      >
        {tag}
      </span>
    </div>
  );
}
