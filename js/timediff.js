let date1;
let time1;
let date2;
let time2;

document.getElementById('date1').addEventListener('change', function() {

    date1 = this.value;

});

document.getElementById('time1').addEventListener('change', function() {

    time1 = this.value;

});
document.getElementById('date2').addEventListener('change', function() {

    date2 = this.value;

});

document.getElementById('time2').addEventListener('change', function() {

    time2 = this.value;

});



function timeDiff() {

    if (!date1 || !date2 || !time1 || !time2) {
        var element = document.getElementById("alertEmpty");
        element.classList.remove("hide");
        element.classList.add("show");

    } else {
        var element = document.getElementById("alertEmpty");

        element.classList.remove("show");
        element.classList.add("hide");
    }

    date1 = new Date(date1);
    date2 = new Date(date2);
    console.log("time1=" + time1);
    console.log("time2=" + time2);

    //TIME_1
    let timeArray1 = time1.split(':');
    console.log("hour1=" + timeArray1[0]);
    // Convert Hour into seconds
    timeSeconds1 = ((timeArray1[0]) * 3600) + ((timeArray1[1]) * 60)
    console.log("TimeSeconds1=" + timeSeconds1);


    //TIME_2
    let timeArray2 = time2.split(':');
    console.log("hour2=" + timeArray2[0]);
    // Convert Hour into seconds
    timeSeconds2 = ((timeArray2[0]) * 3600) + ((timeArray2[1]) * 60)
    console.log("TimeSeconds2=" + timeSeconds2);

    diffTime = Math.abs(timeSeconds2 - timeSeconds1);
    diffTime *= 1000;


    console.log("Date1=" + date1);
    console.log("Date2=" + date2);

    let diffDate = Math.abs((date2) - (date1));
    console.log("Date Difference: " + diffDate);
    diffDate = diffDate + diffTime;

    console.log("diffDate" + diffDate);

    document.getElementById('sec').innerHTML = Math.abs(diffDate / 1000);
    document.getElementById('min').innerHTML = Math.abs(diffDate / 60000);
    document.getElementById('hrs').innerHTML = Math.abs((diffDate / 3.6e6).toFixed(2));
    document.getElementById('day').innerHTML = Math.abs((diffDate / 8.64e7).toFixed(2));
    document.getElementById('wek').innerHTML = Math.abs((diffDate / 6.048e8).toFixed(2));
    document.getElementById('mon').innerHTML = Math.abs((diffDate / 2.628e9).toFixed(2));
    document.getElementById('yrs').innerHTML = Math.abs((diffDate / 3.154e+10).toFixed(2));



}