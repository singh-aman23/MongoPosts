import Link from "next/link";
import classes from "./list.module.css";
import Remove from "./remove";

async function getTopics() {
  try {
    const res = await fetch("/api/topic", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    const data = await res.json();
    return data.topics || [];
  } catch (error) {
    console.log("Error loading topics", error);
    return [];
  }
} 

export default async function List() {
  const topics = await getTopics();
  if(topics.length === 0){
    return <p>Not topics available</p>
  }
  return (
    <>
      {topics.map((t) => (
        <div className={classes.listItem} key = {t._id}>
          <div className={classes.listHeader}>
            <h2>{t.title}</h2>
          </div>
          <p>{t.description}</p>
          <div className={classes.listActions}>
            <Link href={`/edit/${t._id}`}>
              <button className={classes.editBtn}>Edit</button>
            </Link>
            <Remove id = {t._id}/>
          </div>
        </div>
      ))}
    </>
  );
}
