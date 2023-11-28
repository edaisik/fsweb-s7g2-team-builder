const Member = (props) => {
  const { member, handleedit } = props;
  const { name, id } = member;
  return (
    <div>
      {id}-{name} [<button onClick={() => handleedit(id)}>Edit</button>]
    </div>
  );
};
export default Member;
