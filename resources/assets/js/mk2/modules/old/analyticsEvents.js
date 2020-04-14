// A list of all the event triggers throughout the cloud docs site

//feedback yes
$(document).on('click', '.feedbackYes', function (event) {
    ga('Global.send', 'event', 'Feedback', 'Click-Yes', 'Docs-Cloud');
    ga('Cloud.send', 'event', 'Feedback', 'Click-Yes', 'Docs-Cloud');
});

//feedback no
$(document).on('click', '.feedbackNo', function (event) {
    ga('Global.send', 'event', 'Feedback', 'Click-No', 'Docs-Cloud');
    ga('Cloud.send', 'event', 'Feedback', 'Click-No', 'Docs-Cloud');
});

//download - with subcription
$(document).on('click', '.downloadAndSubscribe', function (event) {
    ga('Global.send', 'event', 'Download', 'Subscribe-Yes', 'Docs-Cloud');
    ga('Cloud.send', 'event', 'Download', 'Subscribe-Yes', 'Docs-Cloud');
});

//download - without subcription
$(document).on('click', '.downloadWithoutSubscribe', function (event) {
    ga('Global.send', 'event', 'Download', 'Subscribe-No', 'Docs-Cloud');
    ga('Cloud.send', 'event', 'Download', 'Subscribe-No', 'Docs-Cloud');
});



