import { defineConfig } from 'vite'

// Note: @vitejs/plugin-react can be added for fast refresh; plugin import can
// cause ESM resolution issues in some environments. For this scaffold we keep
// the config minimal so the dev/build can run in a broader set of setups.
export default defineConfig({
  server: { port: 5173 }
})
