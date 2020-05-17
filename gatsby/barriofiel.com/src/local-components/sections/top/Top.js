import React, { useState } from 'react';
import './Top.scss';
import Image from './Image';
import ImageMobile from './ImageMobile';

function Top() {
  return <div className="p-top" >
      <div className="p-top-banner" >
        <Image />
      </div>
      <div className="p-top-banner-mobile" >
        <ImageMobile />
      </div>
    </div>;
}

export default Top;