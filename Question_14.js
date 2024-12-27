

task =["lunch", "Attending Classes", "Cloth washing", "Books Reading", "Talk with Friends"]


task.shift()

task.unshift("Doing assignment","Solve leedcode questions")

task.pop()
task.push('Learn Coding Thinks')


for(var i in task)
{
    console.log(task[i])
}