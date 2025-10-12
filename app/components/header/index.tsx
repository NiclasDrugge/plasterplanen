export const Header = () => {
  return (
    <header className="w-full border-b border-sky-100 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold text-sky-700 tracking-tight">
          Plåsterplanen
        </h1>
        <span className="text-sm text-gray-500">v1.0</span>
      </div>
    </header>
  );
};
