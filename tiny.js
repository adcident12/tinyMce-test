// @ts-ignore
$(document).ready(function(){
    //ดึงข้อมูลจาก php
    var MentionsServer = function (term, success) {
        // @ts-ignore
        $.getJSON('/data.php', function (data) {
            var users = data.map(function (result) {
                var id = result.id;
                var name = result.name.toLowerCase().replace(/ /g, '');
                var fullname = result.name;
                var images = result.images;
                return {
                    id: id,
                    name: name,
                    fullName: fullname, 
                    image: images,
                };
                
            });
            var findUser = function (term, success) {
                var matches = users.filter(function (user) {
                    return user.name.indexOf(term.toLowerCase()) === 0;
                });
                matches = matches.slice(0, 10);
                var timeout = 30;
                window.setTimeout(function () {
                    success(matches);
                }, timeout);
            };
            return findUser(term, success);
        });
    };

    //autocomplete
    var mentions_menu_complete = function (editor, userinfo) {
        const x = document.createElement('div');
        x.innerHTML = '<span style="color: green" class="mentionsmentionsmentions"><img src="'+userinfo.image+'" style="width: 50px; height: 50px; border-radius: 25px 25px; position: relative; top: 15px;">'+" "+userinfo.fullName+'</span>';
        return x.childNodes[0];
    };

    var mentions_fetch = function (query, success) {
        MentionsServer(query.term, success);
        console.log(success);
    };

//TINYMCE
    // @ts-ignore
    tinymce.init({
        selector: "textarea",
        themes: "modern",
        plugins: "mentions lists emoticons code",
        toolbar: "numlist bullist emoticons code",
        mentions_selector: '.mentionsmentionsmentions',
        mentions_fetch: mentions_fetch,
        mentions_menu_complete: mentions_menu_complete,
    });
});
