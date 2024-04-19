import "./Product.scss";
import React, { useState } from 'react';
import { Header } from "./components/Header"
import { AddToCart } from "./components/AddToCart"
import { Description } from "./components/Description"
import { MainImage } from "./components/MainImage"

export const Product = () => {
  return (
    <>
    <div className="container-bg">
    <Header></Header>
    <MainImage></MainImage>
    </div>
    <div className="desc-container">
    <Description></Description>
    <AddToCart></AddToCart>
    </div>
    
    </>
  );
};
