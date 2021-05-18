import Breadcrumb from "./Breadcrumb";

export default function HeadingPage({
  breadcrumbItems = [],
  title,
  Heading = "div",
}) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap-reverse lg:justify-between items-center py-12">
      <Breadcrumb items={breadcrumbItems} />
      <Heading className="text-xl lg:text-2xl text-primary-100 poppins font-bold lg:order-1 text-center lg:text-left">
        {title}
      </Heading>
    </div>
  );
}
