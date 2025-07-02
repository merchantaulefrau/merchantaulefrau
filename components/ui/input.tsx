
export function Input({ className = '', ...props }: any) {
  return (
    <input className={`border rounded px-3 py-2 ${className}`} {...props} />
  );
}
