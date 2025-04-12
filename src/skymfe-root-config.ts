import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";
import layout from "./applications.json";

const routes = constructRoutes(layout);

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => import(/* webpackIgnore: true */ name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

layoutEngine.activate();
start();
