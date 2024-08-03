// 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
function Student(){
    this.grades=[]
    this.addgrade=addgrade
    this.averagegrade=averagegrade
}

function addgrade(item){
    this.grades.push(item)
}

function averagegrade(){
    let sum=0
    for(let i=0;i<this.grades.length;i++){
        sum+=this.grades[i]
    }
    return sum/this.grades.length
}
var student =new Student()

// 示例：

student.addgrade(90)
student.addgrade(85)
student.addgrade(95)

console.log(student.averagegrade()) // 90