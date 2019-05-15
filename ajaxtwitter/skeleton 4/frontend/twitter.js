const FollowToggle = require ('./follow_toggle');

$( () => { 

    $('.follow-toggle').each(function(index, el) {
        let $el = $(el);
       return new FollowToggle($el);
    });
});