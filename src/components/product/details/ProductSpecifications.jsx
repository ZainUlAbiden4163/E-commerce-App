export default function ProductSpecifications({ specs = [], tags = [] }) {
  return (
    <div>
      <h2
        className="text-lg text-[#141414] mb-3"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Specifications
      </h2>

      <div className="border border-black/10 rounded-lg divide-y divide-black/5">
        {specs.map((s) => (
          <div key={s.label} className="flex px-4 py-2.5 text-sm">
            <span className="w-32 shrink-0 text-[#8C8577]">{s.label}</span>
            <span className="text-[#141414] capitalize">{s.value}</span>
          </div>
        ))}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#6B6558] bg-[#F0EEE7] px-2.5 py-1 rounded-full capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
