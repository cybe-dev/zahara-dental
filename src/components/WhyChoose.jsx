import { theme } from "../../tailwind.config";

export function WhyChooseList({ icon, title, children }) {
  const Icon = icon;
  return (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-accent rounded-lg">
        <Icon fill={theme.colors.primary[300]} width={44} height={44} />
      </div>
      <div className="text-grayscale-800 font-bold arimo text-center mt-1">
        {title}
      </div>
      <div className="text-grayscale-700 text-sm mt-1 text-center">
        {children}
      </div>
    </div>
  );
}

export default function WhyChooseContainer({ children }) {
  return (
    <div className="grid grid-flow-row gap-16 md:gap-12 lg:gap-10 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
      {children}
    </div>
  );
}
