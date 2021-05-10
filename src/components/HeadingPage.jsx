import Breadcrumb from "./Breadcrumb";

export default function HeadingPage({ breadcrumbItems = [], title }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center py-12">
      <Breadcrumb items={breadcrumbItems} />
      <div className="text-xl lg:text-2xl text-primary-100 poppins font-bold lg:order-1">
        {title}
      </div>
    </div>
  );
}
