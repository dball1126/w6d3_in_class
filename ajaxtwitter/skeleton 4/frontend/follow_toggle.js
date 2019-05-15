// const Require = require ('/api_util.js');
class FollowToggle{

    constructor($el){
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");
        // debugger
        this.$el = $el;
        this.render();
        $(this.$el).on("click", this.handleClick.bind(this));
    }

    render(){
        if(this.followState === false){
            this.$el.text("Follow!");
        } else {
            this.$el.text("Unfollow!");
        }
    }

    changeFollow() {
        // debugger
        if (this.followState === false){
            this.followState = true;
        } else{
            this.followState = false;
        }

        this.render();
    }   
    
    handleClick(e){
        e.preventDefault();
        let clicker;
        if(this.followState){
            clicker = 'DELETE';
        } else {
            clicker = 'POST';
        }

        if (clicker === 'DELETE') {
            this.$el.text("Unfollowing!");
        } else {
            this.$el.text("Following!");
        }

        const that = this;
        $.ajax({
            method: clicker,
            url: `/users/${this.userId}/follow`,
            dataType: "json",
            beforeSend: function () {
                $('.follow-toggle').prop('disabled', true);
            },
            success: function () {
                $('.follow-toggle').prop('disabled', false);
            }
        }
        ).then(that.changeFollow.bind(that));
    

        // followUnfollow(that.userId);
    }
    
}
module.exports = FollowToggle;