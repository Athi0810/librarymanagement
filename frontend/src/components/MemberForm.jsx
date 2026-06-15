import React from "react";

const MemberForm = ({ formData, handleChange, handleSubmit, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Member Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default MemberForm;