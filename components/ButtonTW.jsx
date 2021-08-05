export const Button = ({ label, template = 'primary', size = 'medium' }) => {
  return <button className="px-2 py-1 bg-green-400 text-white">{label}</button>;
};
