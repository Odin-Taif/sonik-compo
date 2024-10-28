type Props = {
  label: string;
  disabled?: boolean;
  small?: boolean;
  widthFull?: boolean;
};
export const Button = ({ label, disabled, small, widthFull }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`inline-flex text-center bg-orange items-center relative disabled:opacity-70 px-4 mx-1 disabled:cursor-not-allowed rounded hover:opacity-80 transition
            ${small ? "py-1" : "py-2"} ${small ? "font-light" : "font-semibold"}
         ${
           widthFull
             ? "w-full text-center items-center justify-center"
             : "w-auto"
         }`}
    >
      {label}
    </button>
  );
};
