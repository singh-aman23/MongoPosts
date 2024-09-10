"use client";
import classes from "./remove.module.css";
import { useRouter } from "next/navigation";

export default function Remove({ id }) {
  const router = useRouter();
  async function removeTopic() {
    const confirmed = confirm("Are you Sure you want to delete the topic?");

    if (confirmed) {
      const res = await fetch(`/api/topic?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
   
  }
  return (
    <>
      <button onClick={removeTopic} className={classes.deleteBtn}>
        Delete
      </button>
    </>
  );
}
