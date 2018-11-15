$(document).ready(function(){
    //ดึงข้อมูลจาก php
    var MentionsServer = function (term, success) {
        $.getJSON('/data.php', function (data) {
            var userNames = data;
            var users = userNames.map(function (fullName) {
                var name = fullName;
                return {
                    id: name,
                    name,
                    fullName,
                };
            });

            var findUser = function (term, success) {
                /* demo string search */
                var matches = users.filter(function (user) {
                    return user.name.indexOf(term.toLowerCase()) !== -1;
                });
                /* fake async server delay */
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
        x.innerHTML = '<span style="color: green" class="mentionsmentionsmentions">@' + userinfo.name + '</span>';
        return x.childNodes[0];
    };

    var mentions_fetch = function (query, success) {
        MentionsServer(query.term, success);
    };

//TINYMCE
    tinymce.init({
        selector: "textarea",
        plugins: "mentions lists emoticons",
        toolbar: "numlist bullist emoticons",
        fullpage_default_doctype: "<!DOCTYPE html>",
        mentions_selector: '.mentionsmentionsmentions',
        mentions_fetch: mentions_fetch,
        mentions_menu_complete: mentions_menu_complete
    });
});
