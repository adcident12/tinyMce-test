// @ts-ignore
$(document).ready(function(){
    $('#submit').click(function(){
        var content = tinyMCE.get('textarea').getContent()
        console.log(content);
    });
    $('#append').click(function(){
        var image = 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png';
        var fullName = 'Terry Green';
        var rs = '<span style="color: green" class="mentions"><img src="'+image+'" style="width: 50px; height: 50px; border-radius: 25px 25px; position: relative; top: 15px;">'+" "+fullName+'</span>';
        tinymce.execCommand('mceInsertRawHTML', false, rs);
    });
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
                matches = matches.slice(0, 15);

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
        x.innerHTML = '<span style="color: green" class="mentions"><img src="'+userinfo.image+'" style="width: 50px; height: 50px; border-radius: 25px 25px; position: relative; top: 15px;">'+" "+userinfo.fullName+'</span>';
        return x.childNodes[0];
    };

    var mentions_fetch = function (query, success) {
        MentionsServer(query.term, success);
    };

//TINYMCE
    // @ts-ignore
    tinymce.init({
        selector: "textarea",
        themes: "modern",
        plugins: 'print fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media codesample table charmap hr pagebreak nonbreaking toc insertdatetime advlist lists wordcount imagetools textpattern help mentions',
        toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        // plugins: "mentions",
        // toolbar: "numlist",
        mentions_selector: '.mentions',
        mentions_fetch: mentions_fetch,
        mentions_menu_complete: mentions_menu_complete,
        image_advtab: true,
    });
});
