import { Layout } from "../components/Layout"
import { TodoItem } from "../components/TodoItem"
import { Button } from "../components/Button"
import classes from "../styles/Dashboard.module.css"
import plusIcon from "../images/plus-icon.svg"
import { useState } from "react"

export function Dashboard() {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (event) => {
    console.log("Hello World")
  }

  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Today</h1>
        <p className={classes.page_subtitle}>4/6 completed</p>

        <section className={classes.todo_list}>
          <TodoItem
            title="Cooking a salmon sushi"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Write code for fizz buzz algorithm"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Build Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Design Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
        </section>

        {showForm ? null : (
          <div
            onClick={() => setShowForm(true)}
            className={classes.add_task_button}
          >
            <img src={plusIcon} alt="Plus icon" />
            <p>Add task</p>
          </div>
        )}

        {showForm ? (
          <form onSubmit={handleSubmit} className={classes.add_todo_form}>
            <div className={classes.add_todo_form_inputs}>
              <input type="text" placeholder="Task title" />
              <textarea rows={3} placeholder="Description"></textarea>
            </div>

            <div className={classes.add_todo_form_buttons}>
              <Button>Add</Button>
              <Button onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        ) : null}
      </main>
    </Layout>
  )
}
