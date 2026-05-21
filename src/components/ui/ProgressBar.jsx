// const ProgressBar = ({
//   progress,
//   color = "blue",
// }) => {
//   const colors = {
//     blue: "bg-blue-500",
//     green: "bg-green-500",
//     red: "bg-red-500",
//     yellow: "bg-yellow-500",
//   };

//   return (
//     <div className="w-full bg-gray-200 rounded h-2">
//       <div
//         className={`h-2 rounded ${colors[color]}`}
//         style={{
//           width: `${progress}%`,
//         }}
//       />
//     </div>
//   );
// };

// export default ProgressBar;
const ProgressBar = ({
  progress,
  color = "blue",
}) => {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-500 ${colors[color]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;