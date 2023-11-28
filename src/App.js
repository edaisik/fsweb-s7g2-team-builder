import "./App.css";
import memberList from "./SahteVeri";
import MemberList from "./components/MemberList";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState(memberList);
  const [editmember, setEditMember] = useState(null);

  const handleEdit = (id) => {
    const member = members.find((item) => item.id === id);
    setEditMember(member);
  };

  const addMember = (member) => {
    if (member.id) {
      const updatedmemberlist = members.map((item) => {
        if (item.id === member.id) {
          return member;
        } else {
          return item;
        }
      });
      setMembers(updatedmemberlist);
    } else {
      const newmember = { ...member, id: Math.floor(Math.random() * 100000) };

      setMembers([...members, newmember]);
    }
  };
  return (
    <div className="App">
      <MemberList list={members} handleedit={handleEdit} />
      <Form addmember={addMember} editmember={editmember} />
    </div>
  );
}

export default App;
