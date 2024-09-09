import classes from './editTopicFrom.module.css'
export default function EditTopicForm(){
    return <>
         <form className={classes.form}>
      <input type="text" placeholder="Topic Title" className={classes.input} />
      <input type="text" placeholder="Add description" className={classes.input} />
      <button className={classes.button}>Update Topic</button>
    </form>
    </>
}