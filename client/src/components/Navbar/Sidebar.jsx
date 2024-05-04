import logo from "/images/logo.png";

const Sidebar = ({ children }) => {
  return (
    <aside className="h-screen top-0 sticky w-1/4 bg-black">
      <main className="bg-[#151515] m-2 py-4 px-2 rounded-md">
        <div className="flex items-center justify-start p-2 mx-4">
          <img
            src={logo}
            alt="Music waves in a shape of a moon"
            className="aspect-square h-8 w-8"
          />
          <h1 className="font-bold text-base">Synthwave</h1>
        </div>
        <ul>{children}</ul>
      </main>
    </aside>
  );
};

export default Sidebar;
