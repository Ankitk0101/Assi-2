

daily_task = ["lunch", "Attending Classes", "Cloth washing", "Books Reading", "Talk with Friends"]

daily_task.unshift("Ready for classes")

daily_task.pop()


for(var i in daily_task)
{
  console.log(daily_task[i])
}