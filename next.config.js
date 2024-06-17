// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/exhibitions",
        destination: "http://localhost:3000/exhibitions",
      },
    ];
  },
};
