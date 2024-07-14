const { defineConfig } = require('vite');
const reactPlugin = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [reactPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});