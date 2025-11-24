const { getDefaultConfig } = require("@expo/metro-config");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativewind({
  ...config,
  cacheVersion: "@counter-monorepo/mobile",
  transformer: {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "cjs", "mjs", "svg"],
  },
});
