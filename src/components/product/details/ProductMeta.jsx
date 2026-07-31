import { AlertCircleIcon, CheckCircleIcon } from "../../ui/icons";

// icons for shipping / return / warranty rows — simple line icons, no new deps
function TruckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      {...props}
    >
      <rect x="1" y="7" width="14" height="10" rx="1" />
      <path d="M15 10h4l3 3v4h-7z" />
      <circle cx="6" cy="19" r="1.5" />
      <circle cx="17.5" cy="19" r="1.5" />
    </svg>
  );
}

function RefreshIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      {...props}
    >
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.5 15a9 9 0 1 0 2-9.5L1 10" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      {...props}
    >
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" />
    </svg>
  );
}

export default function ProductMeta({
  availabilityStatus,
  shippingInformation,
  returnPolicy,
  warrantyInformation,
}) {
  const inStock = availabilityStatus === "In Stock";

  return (
    <div className="border border-black/10 rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-2">
        {inStock ? (
          <CheckCircleIcon className="h-4 w-4 text-[#3F7A4E]" />
        ) : (
          <AlertCircleIcon className="h-4 w-4 text-[#B23B3B]" />
        )}
        <span
          className={`text-sm font-medium ${inStock ? "text-[#3F7A4E]" : "text-[#B23B3B]"}`}
        >
          {availabilityStatus}
        </span>
      </div>

      {shippingInformation && (
        <div className="flex items-center gap-2 text-sm text-[#6B6558]">
          <TruckIcon className="h-4 w-4 text-[#8C8577] shrink-0" />
          {shippingInformation}
        </div>
      )}

      {returnPolicy && (
        <div className="flex items-center gap-2 text-sm text-[#6B6558]">
          <RefreshIcon className="h-4 w-4 text-[#8C8577] shrink-0" />
          {returnPolicy}
        </div>
      )}

      {warrantyInformation && (
        <div className="flex items-center gap-2 text-sm text-[#6B6558]">
          <ShieldIcon className="h-4 w-4 text-[#8C8577] shrink-0" />
          {warrantyInformation}
        </div>
      )}
    </div>
  );
}
