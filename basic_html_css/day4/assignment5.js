$(document).ready(function(){
    // mouseenter() event will execute when our mouse cursor will move in perticular selector and apply css property to target selector
    $("#serviceItem1").mouseenter(
        function(){
        $("#serviceItem1 i, #serviceItem1 h2").css('color','#fff')
    }),
    $("#serviceItem2").mouseenter(
        function(){
        $("#serviceItem2 i, #serviceItem2 h2").css('color','#fff')
    }),
    $("#serviceItem4").mouseenter(
        function(){
        $("#serviceItem4 i, #serviceItem4 h2").css('color','#fff')
    }),
    $("#serviceItem5").mouseenter(
        function(){
        $("#serviceItem5 i, #serviceItem5 h2").css('color','#fff')
    }),
    // mouseleave() event will execute when mouse will leave following selector. after that it will apply given css property to target selector.
    $(".serviceItem").mouseleave(
        function(){
        $(".serviceItem i, .serviceItem h2").css('color',' #1f1e1e')
    })
    
})