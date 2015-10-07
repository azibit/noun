var React = require('react');
var ReactRouter = require('react-router');
var HomePage = require('./component/HomePageComponent');
var PageWrapper = require('./component/PageWrapperComponent');
var MainApp = React.createClass({

    mixin:[ReactRouter.State],
    render: function () {
        return (
            <div>
                <PageWrapper>
                    <ReactRouter.RouteHandler/>
                </PageWrapper>
                </div>
        );
    }
});

var Router = (
    <ReactRouter.Route handler = {MainApp}>
        <ReactRouter.Route path="/"  name="home" handler={HomePage}/>
        </ReactRouter.Route>
);

ReactRouter.run(
    Router,
    function(Handler){
        React.render(<Handler/>, document.getElementById('noun-entry-point'));
});