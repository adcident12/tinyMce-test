$(document).ready(function(){
    $('#submit').click(function(){
        var content = tinyMCE.get('textarea').getContent()
        console.log(content);
    });
});
