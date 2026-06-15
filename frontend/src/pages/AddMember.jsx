import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AddMember = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const saveMember = async (e) => {
    e.preventDefault();

    try {
      await api.post("/members", member);

      alert("Member Added Successfully");

      navigate("/members");
    } catch (error) {
      console.error(error);
      alert("Failed to Add Member");
    }
  };

  return (
    <div>
      <h2>Add Member</h2>

      <form onSubmit={saveMember}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={member.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            value={member.phone}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Address</label>
          <br />
          <textarea
            name="address"
            value={member.address}
            onChange={handleChange}
            rows="4"
            cols="40"
            required
          />
        </div>

        <br />

        <button type="submit">
          Save Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;