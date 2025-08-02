import { ButtonProps } from "@/interface";

const Button = ({ action, buttonLabel, buttonBackgroundColor }: ButtonProps) => {
  const getBackgroundColor = () => {
    switch (buttonBackgroundColor) {
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'orange':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'purple':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'gray':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <button
      onClick={action}
      className={`px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200 ${getBackgroundColor()}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;