import Member from "./Member";

const MemberList = (props) => {
  const { list, handleedit } = props;
  return (
    <>
      {list.map((item) => (
        <Member key={item.id} member={item} handleedit={handleedit} />
      ))}
    </>
  );
};
export default MemberList;
