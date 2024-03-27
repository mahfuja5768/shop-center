"use client";

import Image from "next/image";
import Star from "/public/assets/svg/star.svg";
export default function Rating({ value }) {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, idx) => (
        <Image key={idx} src={star}  width="20px" alt="star" />
      ))}
    </>
  );
}
