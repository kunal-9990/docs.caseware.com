import React from 'react';
import ReactDOM from 'react-dom';
import ReactHabitat from 'react-habitat'
import Banner from './components/Banner';
import Announcement from './components/Announcement'

const containers = [
  {
    id: "banner",
    component: Banner
  },
  {
    id: "announcement",
    component: Announcement
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