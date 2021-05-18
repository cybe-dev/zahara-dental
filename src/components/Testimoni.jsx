import Image from "next/image";

export const TestimoniList = ({ children, name, title, pic }) => (
  <div className="flex flex-col bg-grayscale-100 hover:shadow-lg rounded-lg roboto p-5 text-grayscale-700">
    <div className="flex-1">{children}</div>
    <div className="flex mt-5 pt-5 border-t border-grayscale-200">
      <div className="w-12 h-12 relative rounded-full bg-grayscale-300">
        {pic && (
          <Image
            src={pic}
            height={64}
            width={64}
            alt={name}
            objectFit="cover"
            objectPosition="top"
            className="rounded-full"
          />
        )}
      </div>
      <div className="ml-5">
        <span className="block text-primary-200 poppins font-bold text-sm">
          {name}
        </span>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  </div>
);
export default function Testimoni({ children }) {
  return (
    <div className="grid grid-flow-row gap-5 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
      {children}
    </div>
  );
}
