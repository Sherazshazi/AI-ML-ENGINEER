import { Link } from "react-router-dom";
import saLogo from "@/assets/sa-logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={saLogo} 
        alt="Sheraz Ahmad Logo" 
        className="w-10 h-10 rounded-lg shadow-soft"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-tight">Sheraz Ahmad</span>
          <span className="text-xs text-muted-foreground font-medium">AI/ML Engineer</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;