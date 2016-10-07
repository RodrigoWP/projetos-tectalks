/**
 * Created by Digo on 01/10/2016.
 */

const HelloWorld = React.createClass({
    render: function () {
        return <h1>Oi mundo!!!</h1>
    }
})

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('app')
)