
// 擬似的に遅延ロード(1秒)を再現
setTimeout(function(){

 var Flux02App = require('./Flux02App');

 var React = require('react');
 var Router = require('react-router');
 var Route = Router.Route;

 var content = document.getElementById('content');


  var Routes = (
    <Route handler={Flux02App}>
      <Route name="/" handler={Flux02App}/>
    </Route>
  );

  Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
  });

},1000);
