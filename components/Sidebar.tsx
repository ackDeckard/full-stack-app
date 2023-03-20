import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links = [
  {
    label: "Home",
    icon: "Grid",
    link: "/home",
  },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  {
    label: "Profile",
    icon: "User",
    link: "/profile",
  },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div>
      <Card className="flex h-full w-40 flex-wrap items-center justify-between">
        {links.map((link) => (
          <SidebarLink link={link} />
        ))}
      </Card>
    </div>
  );
};

export default Sidebar;
