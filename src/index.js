Hooks.on("init", () => {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "",
      lang: "es",
      dir: "es-ES/compendium",
    });
  }
});
