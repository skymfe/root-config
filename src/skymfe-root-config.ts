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

registerApplication({
  name: "@skymfe/flight-booking-mf",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@skymfe/flight-booking-mf"
    ),
  activeWhen: ["/flights"],
});

start({
  urlRerouteOnly: true,
});
