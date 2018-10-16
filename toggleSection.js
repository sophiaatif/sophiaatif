function toggleSection() {
    var x = document.getElementById("timeline");
    var res = document.getElementById("resumeSection")
    var switchtextTimeline = document.getElementById("switchTimeline");
    var switchtextResume = document.getElementById("swicthResume");
    console.log(x.style.display);
    if (x.style.display == "none") {
        x.style.display = "block";
        res.style.display= "none";
        switchtextTimeline.style.color="#950952";
        swicthResume.style.color="grey";
    } else{
        x.style.display = "none";
        res.style.display= "flex";
        console.log(x.style.display);
        
        switchtextTimeline.style.color="grey";
        swicthResume.style.color="#950952";
    }
}