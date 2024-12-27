stu_marks = [34,30,50,98,93,56,34,67,54,20,24,15]

var count =0

for(var i in stu_marks)
{
    if(stu_marks[i] < 40)
    {
        stu_marks[i] +=20
    }
    if(stu_marks[i] > 90)
    {
        stu_marks[i] =90
    }
    if(stu_marks[i] > 50)
    {
          count+=1
    }

    

}
 
 console.log("Count of passed  Studnet: ",count)

console.log(" Marks of all Students" )
for( var i in stu_marks )
{
    
    console.log(stu_marks[i])
}