const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: 'Home', component: () => import("pages/IndexPage.vue") },
      { path: "/auth", component: () => import("pages/AuthPage.vue") },
      {
        path: "/exhauster/:id",
        component: () => import("pages/ExhausterPage.vue"),
      },
      {
        path: "/trends/:id",
        component: () => import("pages/TrendsPage.vue"),
        name: "trends",
      },
      {
        path: "/setting",
        component: () => import("pages/SettingPage.vue")
      },
      {
        path: "/download",
        name: "Download",
        component: () => import("pages/DownloadPage.vue")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
