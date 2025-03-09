
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  glassEffect?: boolean;
  neonBorder?: "none" | "neon" | "cyan" | "purple";
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className,
  glassEffect = false,
  neonBorder = "none",
  children,
  onClick,
}) => {
  const neonStyles = {
    none: "",
    neon: "border-tattoo-neon shadow-neon",
    cyan: "border-tattoo-cyan shadow-neon-cyan",
    purple: "border-tattoo-purple shadow-neon-purple",
  };

  return (
    <div
      className={cn(
        "rounded-xl border p-6",
        glassEffect ? "glass-card" : "bg-tattoo-dark",
        neonStyles[neonBorder],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
