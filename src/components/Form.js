import { useEffect, useState } from "react";
const initialMember = {
  name: "",
  surname: "",
  departmant: "",
  age: "",
};
const Form = (props) => {
  const { addmember, editmember } = props;
  const [member, setMember] = useState(initialMember);

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addmember(member);
    setMember(initialMember);
  };

  useEffect(() => {
    if (editmember) {
      setMember(editmember);
      console.log(editmember);
    }
  }, [editmember]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={member.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="departmant"
            value={member.departmant}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={member.age}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
