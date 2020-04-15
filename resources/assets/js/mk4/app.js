import React from 'react';
import ReactDOM from 'react-dom';
import ReactHabitat from 'react-habitat'
import ExamplePage from './components/ExamplePage';

const containers = [
  {
    id: "testelement",
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