import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type FeatureCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

const FeatureCard = ({
  title,
  description,
  className,
  children,
}: FeatureCardProps) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl text-white font-medium mt-6">{title}</h3>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
