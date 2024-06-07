import React, { memo, useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="admin" id="admin">
      Admin
    </main>
  );
};

export default memo(Admin);
