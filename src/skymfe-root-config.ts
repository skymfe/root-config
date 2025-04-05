import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@skymfe/header-mf",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@skymfe/header-mf"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
