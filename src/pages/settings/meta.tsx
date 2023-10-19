import Profile from "./Profile";

export const settingsData = {
  tabData: [
    {
      name: "My details",
      component: <Profile />,
      data: {
        firstName: "Killan",
        lastName: "James",
        email: "killanjames@gmail.com",
        role: "Product Designer",
      },
    },
    {
      name: "Plan",
      component: <div>No Data Found</div>,
    },
    {
      name: "Notifiations",
      component: <div>No New Notifications</div>,
    },
  ],
};
