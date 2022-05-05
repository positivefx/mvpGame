import React, { useState, useEffect, useContext } from 'react';
import EachBox from './EachBox.jsx';
import { BoardWrapper, Row } from './Style/style.js';
import _ from 'underscore';

function PlayBoard() {

  return (
    <BoardWrapper>
      <Row>
        {_.range(0, 5).map((count) => (
          <EachBox key={count} position={count} rowIdx={0} />
        ))}
      </Row>

      <Row>
        {_.range(0, 5).map((count) => (
          <EachBox key={count} position={count} rowIdx={1} />
        ))}
      </Row>

      <Row>
        {_.range(0, 5).map((count) => (
          <EachBox key={count} position={count} rowIdx={2} />
        ))}
      </Row>

      <Row>
        {_.range(0, 5).map((count) => (
          <EachBox key={count} position={count} rowIdx={3} />
        ))}
      </Row>

      <Row>
        {_.range(0, 5).map((count) => (
          <EachBox key={count} position={count} rowIdx={4} />
        ))}
      </Row>
    </BoardWrapper>
  );
}

export default PlayBoard;
