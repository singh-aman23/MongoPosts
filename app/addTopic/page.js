"use client";
import { useRouter } from "next/navigation";
import classes from "./page.module.css";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/topic", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (!res.ok) {
        throw new Error("Failed to create a topic");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create a topic");
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Topic Title"
        className={classes.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Add description"
        className={classes.input}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit" className={classes.button}>
        Add Topic
      </button>
    </form>
  );
}
