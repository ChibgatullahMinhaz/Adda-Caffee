import emptyCup from "../../assets/icons/1.png"; 

const NoCoffeeFound = () => {
  return (
    <div className="max-w-10/12 mx-auto col-span-2">
    
    <div className="max-w-sm mx-auto flex flex-col items-center justify-center py-20 text-center text-gray-600">
      <img
        src={emptyCup}
        alt="Empty coffee cup"
        className="w-32 h-32 mb-6 opacity-70"
      />
      <h2 className="text-2xl font-semibold mb-2">No coffees available</h2>
      <p className="text-sm mb-6">
        Try adding a new coffee or check back later.
      </p>
    </div>
    </div>
  );
};

export default NoCoffeeFound;
