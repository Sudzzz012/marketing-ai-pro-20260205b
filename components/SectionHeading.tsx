export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm opacity-80">{subtitle}</p> : null}
    </div>
  );
}
