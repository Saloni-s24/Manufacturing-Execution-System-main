const Card = ({
  title,
  children,
}) => {
  return (
    <div className="bg-white rounded shadow">
      {title && (
        <div className="border-b p-4">
          <h2 className="font-semibold text-lg">
            {title}
          </h2>
        </div>
      )}

      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;