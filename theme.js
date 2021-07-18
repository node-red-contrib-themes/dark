module.exports = function(RED) {
  RED.plugins.registerPlugin("dark", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ]
  })

  RED.plugins.registerPlugin("dark-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ]
  })
}