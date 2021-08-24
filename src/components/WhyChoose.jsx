import { theme } from "../../tailwind.config";

export function WhyChooseList({ icon, title, children, right = false }) {
  const Icon = icon;
  return (
    <div className="group">
      <div className="relative flex flex-col items-center ">
        <div className="p-3 bg-accent rounded-lg">
          <Icon fill={theme.colors.primary[300]} width={44} height={44} />
        </div>
        <div className="text-grayscale-800 font-bold arimo text-center mt-1">
          {title}
        </div>
        <div
          className={
            right
              ? "p-0 lg:group-hover:p-5 w-0 lg:group-hover:w-96 group-hover:block transform -translate-y-12 group-hover:translate-y-0 bg-primary-300 text-grayscale-100 absolute rounded shadow overflow-hidden transition-transform z-10 top-full right-0"
              : "p-0 lg:group-hover:p-5 w-0 lg:group-hover:w-96 group-hover:block transform -translate-y-12 group-hover:translate-y-0 bg-primary-300 text-grayscale-100 absolute rounded shadow overflow-hidden transition-transform z-10 top-full left-0"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseContainer({ children }) {
  return (
    <div className="grid grid-flow-row gap-16 md:gap-12 lg:gap-10 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16">
      {children}
    </div>
  );
}
