import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  learnMoreUrl: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  learnMoreUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={100}
        height={100}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={learnMoreUrl} className="text-indigo-600 font-medium hover:underline">
        Learn more →
      </a>
    </div>
  );
} 