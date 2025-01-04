import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bookmark,
  Briefcase,
  ChevronRight,
  LeafIcon,
  Scale,
  Shield,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SectionHeader from "@/components/(home)/sections/section-header";

// FeatureCard component
interface FeatureCardProps {
  icon: ReactNode; // Icon to display
  title: string; // Card title
  description: string; // Card description
  linkText: string; // Text for the link
  linkHref: string; // Link URL
  titlebg: string; // Background color for title
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  titlebg,
}) => {
  return (
    <Card className="group bg-secondary text-primary transition-all hover:scale-105">
      <CardHeader>
        <CardTitle
          className="center w-[3.75rem] rounded-lg p-3"
          style={{
            backgroundColor: titlebg,
          }}
        >
          {icon}
        </CardTitle>
        <CardDescription>
          <span className="font-inter text-lg font-semibold text-primary">
            {title}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={linkHref}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          {linkText} <ChevronRight className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

// FeatureSection component
const FeatureSection = () => {
  const features = [
    {
      icon: <Bookmark />, // Icon for organized notes
      title: "Organize Your Notes",
      description:
        "Categorize, sort, and manage your notes with ease, ensuring everything is just a click away.",
      linkText: "Start Organizing",
      linkHref: "/organize-notes",
      titlebg: "#FFE4E6", // Light pink background
    },
    {
      icon: <Briefcase />, // Icon for collaborative work
      title: "Collaborate Seamlessly",
      description:
        "Share notes and collaborate with your team in real-time for better productivity.",
      linkText: "Collaborate Now",
      linkHref: "/collaborate",
      titlebg: "#F3F4F6", // Light gray background
    },
    {
      icon: <LeafIcon />, // Icon for eco-friendly notes
      title: "Go Paperless",
      description:
        "Save the environment by digitizing your notes, reducing paper waste effectively.",
      linkText: "Go Digital",
      linkHref: "/go-paperless",
      titlebg: "#DCFCE7", // Light green background
    },
    {
      icon: <Shield />, // Icon for secure notes
      title: "Secure Your Notes",
      description:
        "Ensure your notes are safe with advanced encryption and privacy controls.",
      linkText: "Learn About Security",
      linkHref: "/security",
      titlebg: "#E0F2FE", // Light blue background
    },
    {
      icon: <Scale />, // Icon for productivity tools
      title: "Boost Productivity",
      description:
        "Utilize built-in tools like reminders, tags, and integrations to stay productive.",
      linkText: "Boost Now",
      linkHref: "/boost-productivity",
      titlebg: "#FDE68A", // Light yellow background
    },
    {
      icon: <ChevronRight />, // Icon for fast access
      title: "Quick Access",
      description:
        "Access your notes instantly from anywhere using our cross-platform support.",
      linkText: "Get Started",
      linkHref: "/quick-access",
      titlebg: "#E9D5FF", // Light purple background
    },
  ];

  return (
    <section className="space-y-8 py-5">
      {/* Feature header section */}
      <SectionHeader
        title="Revolutionize Your Note-Taking Experience"
        icons={<Bookmark size={32} />}
        subtitle="GS Notes is your all-in-one solution for organizing, securing, and collaborating on notes effortlessly. "
      />

      {/* Feature Cards section */}
      <section className="grid w-full gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            linkText={feature.linkText}
            linkHref={feature.linkHref}
            titlebg={feature.titlebg}
          />
        ))}
      </section>
    </section>
  );
};

export default FeatureSection;
