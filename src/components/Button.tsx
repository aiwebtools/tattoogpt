
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "neon" | "cyan" | "purple";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  glowing?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glowing = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      neon: "bg-tattoo-dark border border-tattoo-neon text-tattoo-neon hover:bg-tattoo-neon/10",
      cyan: "bg-tattoo-dark border border-tattoo-cyan text-tattoo-cyan hover:bg-tattoo-cyan/10",
      purple: "bg-tattoo-dark border border-tattoo-purple text-tattoo-purple hover:bg-tattoo-purple/10",
    };
    
    const sizeStyles = {
      sm: "h-9 px-3 rounded-md text-sm",
      md: "h-10 py-2 px-4",
      lg: "h-11 px-8 rounded-md text-lg",
      icon: "h-10 w-10",
    };
    
    const glowStyles = {
      primary: glowing ? "shadow-[0_0_15px_rgba(255,56,100,0.5)]" : "",
      secondary: glowing ? "shadow-[0_0_15px_rgba(0,0,0,0.2)]" : "",
      outline: glowing ? "shadow-[0_0_15px_rgba(255,255,255,0.1)]" : "",
      ghost: "",
      link: "",
      neon: glowing ? "shadow-neon animate-pulse-neon" : "",
      cyan: glowing ? "shadow-neon-cyan" : "",
      purple: glowing ? "shadow-neon-purple" : "",
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          glowStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
