import React, { memo, useEffect } from "react";
import DetailWrapper from "../../components/detail-wrapper";
import "../../sass/pages/detail.scss";

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="detail" id="detail">
      <div className="container">
        <DetailWrapper />
      </div>
    </main>
  );
};

export default memo(Detail);
