import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={rootStyle}>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default Layout;
