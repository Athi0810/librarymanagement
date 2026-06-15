import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await api.get("/members");
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMember = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/members/${id}`);
      fetchMembers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete member");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Members List</h2>

        <Link to="/members/add">
          <button>Add Member</button>
        </Link>
      </div>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>

                <td>
                  <button
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">
                No Members Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Members;