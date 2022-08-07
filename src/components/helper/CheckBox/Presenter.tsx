import Image from "next/image";

interface Props {
  checked: boolean;
  onCheck: () => void;
  label: string;
}

const Presenter: React.FC<Props> = (props) => {
  const { checked, onCheck, label } = props;

  return (
    <label className={`flex items-center`} onClick={onCheck}>
      <div
        className={`flex justify-center items-center w-5 h-5 rounded-medium border border-black`}
      >
        {checked && (
          <Image
            src="/icon/checkbox-icon.svg"
            alt="checkbox icon"
            width={18}
            height={15}
          />
        )}
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default Presenter;
