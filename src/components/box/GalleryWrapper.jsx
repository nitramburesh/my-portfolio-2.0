import React from "react";
import styled from "styled-components";

export const GalleryWrapper = styled.div`
  column-count: 3;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  gap: 5px;
  @media (max-width: 768px) {
    column-count: 2;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
`;
