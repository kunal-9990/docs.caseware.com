import ReactHabitat from 'react-habitat'
// import Banner from './components/Banner'

// TODO - remove
import ExamplePage from './components/ExamplePage'

// import 'react-app-polyfill/ie9'
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'
// import '@babel/polyfill'

const containers = [
  {
    id: "ExamplePage",
    component: ExamplePage
  }
];

class Mk4 extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        const builder = new ReactHabitat.ContainerBuilder();
        for (let container of containers) {
            builder.register(container.component).as(container.id);
        }
        this.setContainer(builder.build());
    }
}

export default new Mk4();