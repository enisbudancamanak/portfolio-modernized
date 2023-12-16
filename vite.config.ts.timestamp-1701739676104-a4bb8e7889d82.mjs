// vite.config.ts
import { sveltekit } from "file:///home/enisdev/code/portfolio-web-and-user-interface-design/node_modules/.pnpm/@sveltejs+kit@1.27.6_svelte@4.2.3_vite@4.5.0/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/enisdev/code/portfolio-web-and-user-interface-design/node_modules/.pnpm/vite@4.5.0/node_modules/vite/dist/node/index.js";
import Icons from "file:///home/enisdev/code/portfolio-web-and-user-interface-design/node_modules/.pnpm/unplugin-icons@0.17.4/node_modules/unplugin-icons/dist/vite.mjs";
var vite_config_default = defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte"
    })
  ],
  ssr: {
    noExternal: ["three"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9lbmlzZGV2L2NvZGUvcG9ydGZvbGlvLXdlYi1hbmQtdXNlci1pbnRlcmZhY2UtZGVzaWduXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9lbmlzZGV2L2NvZGUvcG9ydGZvbGlvLXdlYi1hbmQtdXNlci1pbnRlcmZhY2UtZGVzaWduL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2VuaXNkZXYvY29kZS9wb3J0Zm9saW8td2ViLWFuZC11c2VyLWludGVyZmFjZS1kZXNpZ24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRzdmVsdGVraXQoKSxcblx0XHRJY29ucyh7XG5cdFx0XHRjb21waWxlcjogJ3N2ZWx0ZScsXG5cdFx0fSksXG5cdF0sXG5cdHNzcjoge1xuXHRcdG5vRXh0ZXJuYWw6IFsndGhyZWUnXSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdXLFNBQVMsaUJBQWlCO0FBQzFYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsTUFDTCxVQUFVO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0osWUFBWSxDQUFDLE9BQU87QUFBQSxFQUNyQjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
