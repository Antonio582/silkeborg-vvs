"use client";

import AnimatedSection from "./AnimatedSection";
import Breadcrumb from "./Breadcrumb";

interface Props {
  title: string;
  description: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export default function PageHeader({ title, description, breadcrumbItems }: Props) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <Breadcrumb items={breadcrumbItems} />
        <AnimatedSection>
          <div className="pb-12 pt-4">
            <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">{description}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
