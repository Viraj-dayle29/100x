import React from 'react';
import styled from 'styled-components';

const StyleArrow: React.FC = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="line one">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line two">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line three">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line four">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line five">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line six">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
        <div className="line seven">
          <div className="round" />
          <div className="round" />
          <div className="round" />
          <div className="round" />
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    width: 50px;
    gap: 4px;
  }

  .button:hover {
    animation: move 2s infinite ease;
  }

  @keyframes move {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(20px);
    }

    100% {
      transform: translateX(0);
    }
  }

  .round {
    width: 6px;
    height: 6px;
    background: #3da9fc;
    border-radius: 50%;
  }

  .line {
    display: flex;
    gap: 4px;
  }

  .two {
    transform: translateX(10px);
  }

  .three {
    transform: translateX(20px);
  }

  .four {
    transform: translateX(30px);
  }

  .five {
    transform: translateX(20px);
  }

  .six {
    transform: translateX(10px);
  }`;

export default StyleArrow;
