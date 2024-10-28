type Props = {
  label: string;
  color: string;
  disabled?: boolean;
};
export const Button = ({ label, disabled, color }: Props) => {
  return (
    <div className={`bg-pink p-2 w-full flex justify-center`}>
      <button
        disabled={disabled}
        className={`px-10 py-4 rounded-sm text-white hover:shadow-lg ${color}`}
      >
        {label}
      </button>
    </div>
  );
};
