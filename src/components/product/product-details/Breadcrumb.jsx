import { NavLink } from "react-router-dom";
import { ChevronRightSmallIcon } from "../../ui/icons";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center flex-wrap gap-1.5 text-xs text-[#8C8577] mb-6">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.to && !isLast ? (
              <NavLink
                to={item.to}
                className="hover:text-[#141414] transition-colors capitalize"
              >
                {item.label}
              </NavLink>
            ) : (
              <span
                className={`capitalize ${isLast ? "text-[#141414] truncate max-w-70" : ""}`}
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRightSmallIcon className="h-3 w-3" />}
          </span>
        );
      })}
    </nav>
  );
}
