import React from "react";

interface SectionHeaderProps {
  title: string; // Main heading
  subtitle?: string; // Optional subheading
  alignment?: "left" | "center" | "right"; // Text alignment
  className?: string; // Additional custom classes
  icons: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = "center",
  className = "",
  icons,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <header className={`space-y-1 py-4 ${alignmentClasses[alignment] } ${className}`}>
     <span className="inline-flex items-center gap-5">
     <h4 className="py-3 font-semibold uppercase">
        {title} 
      </h4>
      {icons}
     </span>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
