const devProdOption = (dev, prod, argv) => {
  return argv.mode === 'development' ? dev : prod;
}

const prodPlugin = (plugin, argv) => {
  return argv.mode === 'production' ? plugin : () => { };
}

const devPlugin = (plugin, argv) => {
  return argv.mode === 'development' ? plugin : () => { };
}

// export default { devProdOption, prodPlugin, devPlugin }
module.exports = {
  devProdOption, prodPlugin, devPlugin
}