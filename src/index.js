import dva from 'dva';
import {createBrowserHistory as createHistory} from 'history';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
})
console.log(app._store,'_store');
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// 引入model
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
