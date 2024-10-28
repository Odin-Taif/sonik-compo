type Props = {
  label: string;
  color: string;
};
export const Button = ({ label, color }: Props) => {
  return (
    <div className={`bg-pink p-2 w-full flex justify-center`}>
      <button
        className={`px-10 py-4 rounded-sm text-white hover:shadow-lg ${color}`}
      >
        {label}
      </button>
    </div>
  );
};
