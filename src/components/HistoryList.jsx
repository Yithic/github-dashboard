const HistoryList = ({ history, onSelect, onDelete, onClear }) => {
  return (
    <div>
      <h3>Recent Searches</h3>

      {history.map((user, i) => (
        <div key={i}>
          <span onClick={() => onSelect(user)}>{user}</span>
          <button onClick={() => onDelete(user)}>❌</button>
        </div>
      ))}

      {history.length > 0 && (
        <button onClick={onClear}>Clear All</button>
      )}
    </div>
  );
};

export default HistoryList;