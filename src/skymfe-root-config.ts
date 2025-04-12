import { registerApplication, start } from "single-spa";
import { constructApplications, constructLayoutEngine, constructRoutes } from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    header: "<h1>Loading header</h1>",
  },
  errors: {
    header: "<h1>Failed to load header</h1>",
  },
  props: {},
});

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
