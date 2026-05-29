import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon?: LucideIcon;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function StatsGrid({
  stats,
  columns = 4,
  className,
}: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
        >
          {stat.icon && (
            <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
          )}
          <div className="text-2xl sm:text-3xl font-bold text-navy">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
