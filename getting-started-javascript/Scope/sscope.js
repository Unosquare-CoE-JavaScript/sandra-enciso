var teacher = "Kyle";

function otherClass(){
    teacher = "Susy";
    topic = "React"; //When isn't declared, it passed to be global
    console.log("Welcome");
}

otherClass();

teacher;
topic;