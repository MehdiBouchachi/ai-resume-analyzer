export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} />;
}
