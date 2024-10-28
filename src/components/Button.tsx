import { useState } from "react";
import { IconType } from "react-icons";
import { MoonLoader } from "react-spinners";
type Props = {
  label: string;
  small?: boolean;
  widthFull?: boolean;

  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button = ({
  label,
  small,
  widthFull,
  onClick,
  icon: Icon,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    try {
      await onClick(e);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex text-center bg-orange  items-center relative disabled:opacity-70 px-4 mx-1 disabled:cursor-not-allowed rounded hover:opacity-80 transition
            ${small ? "py-1" : "py-2"} ${small ? "font-light" : "font-semibold"}
         ${
           widthFull
             ? "w-full text-center items-center justify-center"
             : "w-auto"
         }`}
    >
      {Icon && (
        <span data-testid="icon">
          <Icon size={20} className={`left-4 top-3 mr-2`} />
        </span>
      )}
      <span className="mx-2 text-white">{label}</span>
      <span data-testid="spinner">
        {loading && <MoonLoader color="#ffffff" size={15} loading={loading} />}
      </span>
    </button>
  );
};
