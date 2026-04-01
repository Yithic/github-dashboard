const HistoryList = ({ history, onSelect, onDelete, onClear }) => {
  return (
  <div className="card">
    <h3>Recent Searches</h3>

    {history.map((user, i) => (
      <div key={i} className="flex" style={{ marginTop: "5px" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(user)}
        >
          {user}
        </span>

        <button onClick={() => onDelete(user)}>X</button>
      </div>
    ))}

    {history.length > 0 && (
      <button onClick={onClear}>Clear All</button>
    )}
  </div>
);
};

export default HistoryList;