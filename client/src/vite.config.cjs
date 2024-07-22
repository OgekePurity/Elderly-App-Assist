const { defineConfig } = require('vite');
const reactPlugin = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [reactPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'https://elderly-app-assist-8.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});