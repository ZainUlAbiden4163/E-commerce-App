import { AlertCircleIcon } from "./Icons";
import Button from "./Button";

export default function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <AlertCircleIcon className="h-8 w-8 text-[#B23B3B]" />
      <p className="text-sm text-[#8C8577]">{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
