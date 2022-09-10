import { Data } from "../config";

const Card = ({ title, completed }: Data) => {
  // console.log(title);
  return (
    <div className="flex mb-4 items-center">
      <div className="flex mb-4 items-center">
        <p className="w-full text-grey-darkest">{title}</p>
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
          {completed ? <span>Done</span> : <span>Inprogress</span>}
        </button>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
