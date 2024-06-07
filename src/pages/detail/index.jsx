import React, { memo } from "react";
import DetailWrapper from "../../components/detail-wrapper";
import "../../sass/pages/detail.scss";

const Detail = () => {
  return (
    <main className="detail" id="detail">
      <div className="container">
        <DetailWrapper />
      </div>
    </main>
  );
};

export default memo(Detail);
