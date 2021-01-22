Hooks.on("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "foundryvtt-pf2e-lang-es",
      lang: "es",
      dir: "static/compendium",
    });

    console.log(`Registered PF2E Spanish Compendiums.`);

  } else {
    console.error(`Failed to register Babele module for Spanish.`);
  }
});
