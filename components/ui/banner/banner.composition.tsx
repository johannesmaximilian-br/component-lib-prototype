import React from "react";
import { Banner } from "./banner";

export const BasicBanner = () => {
    const testFn = () => {
        console.log('clicked!');
    }

  return (
    <>
      <style>
        {`:root {
            --color-primary: #e5fa5b;
            --color-background: #212121;
            --color-white: #fff;

            --button-radius: 4px;
            --button-padding-default: 5px 10px;
            --button-padding-cta: 10px 20px;
            --button-large-text: 12px;

            --banner-padding: 1rem 2rem;
        }`}
      </style>
      <Banner
        imgSrc="https://i.picsum.photos/id/881/500/300.jpg?hmac=AtJANJhWY9RIMLl1kP0Kl1w2gYItiNsZTr7ScUa3T6Q"
        buttonText="Apply Function!"
        headlineText="This is a headline"
        onClick={testFn}
      />
    </>
  );
};

export const BasicBannerNoImage = () => {
    return (
      <>
        <style>
          {`:root {
              --color-primary: #e5fa5b;
              --color-background: #212121;
              --color-white: #fff;

              --button-radius: 4px;
              --button-padding-default: 5px 10px;
              --button-padding-cta: 10px 20px;
              --button-large-text: 12px;

              --banner-padding: 2rem 3rem;
          }`}
        </style>
        <Banner
          buttonText="Follow link!"
          headlineText="I have no image"
          link='#'
        />
      </>
    );
  };
