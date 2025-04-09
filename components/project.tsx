import Image from "next/image";

export interface ProjectConfig {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  repoUrl?: string;
}

export function Project({
  title,
  description,
  imageUrl,
  imageAlt,
  tags,
  repoUrl,
}: ProjectConfig) {
  return (
    <div className="flex flex-col gap-4">
      <div className="group relative z-10 cursor-pointer overflow-hidden rounded-lg transition-all duration-100 ease-in-out hover:scale-[102%]">
        {repoUrl ? (
          <a
            className="absolute inset-0 z-10 flex items-center justify-center p-4 text-center text-white underline opacity-0 transition-all duration-100 group-hover:bg-stone-950/50 group-hover:opacity-100"
            href={`https://www.${repoUrl}`}
            target="_blank"
            rel="noopener norefferer"
          >
            Go to {repoUrl} →
          </a>
        ) : (
          <div className="absolute inset-0 z-10 flex items-center justify-center text-white underline opacity-0 transition-all duration-100 group-hover:bg-stone-950/50 group-hover:opacity-100">
            <p>Repo not available.</p>
          </div>
        )}
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={1440}
          height={1024}
          loading="eager"
          priority
        />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex h-5 items-center justify-center rounded-full bg-stone-300 px-2 dark:bg-stone-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
