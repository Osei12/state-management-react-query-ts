"use client";
import React, { useState } from "react";

interface PostFormProps {
  onSubmit: (data: formData) => void;
  InitialValue?: formData;
}

export default function PostForm({ onSubmit, InitialValue }: PostFormProps) {
  const INITIAL_FORM_STATE: formData = {
    title: InitialValue?.title || "",
    body: InitialValue?.body || "",
  };
  const [formData, setFormData] = useState<formData>(INITIAL_FORM_STATE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(INITIAL_FORM_STATE);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <label> Title </label>
        <input
          value={formData.title}
          onChange={handleInputChange}
          className="border px-3 py-2 "
          type="text"
          name="title"
        />
      </div>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <label> Body </label>
        <input
          value={formData.body}
          onChange={handleInputChange}
          className="border px-3 py-2 "
          type="text"
          name="body"
        />
      </div>
      <div className="flex flex-col mt-4 gap-3 w-72">
        <button className="w-full btn btn-primary" type="submit">
          Sumbit
        </button>
      </div>
    </form>
  );
}
