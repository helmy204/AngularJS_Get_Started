
var work = function () {
    console.log("working hard!");
};

//work();

var doWork = function (f) {

    console.log("starting");

    try{
        f();
    }
    catch (ex) {
        console.log(ex);
    }

    console.log("end");
};

doWork(work);