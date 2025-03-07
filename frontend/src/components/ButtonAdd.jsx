const ButtonAdd = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#141e33] w-[270px] h-[250px] rounded-[12px] border-dashed border-[4px] border-[#1d293e] cursor-pointer text-[#fff] hover:bg-[#4c1d95] transition duration-200 ease-in-out hover:border-[#94A3B8]"
    >
      Add new Task
    </button>
  );
};

export default ButtonAdd;
