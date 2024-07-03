// src/components/IconeBarril.js
import React from 'react';
import { styled } from '@mui/system';

const BarrilContainer = styled('svg')({
  width: 73,
  height: 100,
  viewBox: '0 0 73 100',
  xmlns: 'http://www.w3.org/2000/svg',
  filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))'
});

const Liquido = styled('rect')({
  width: 53,
  x: 10,
  fill: '#000'
});

const TextoPorcentagem = styled('text')({
  fill: '#fff',
  fontSize: '12px',
  fontWeight: 'bold',
  textAnchor: 'middle',
  alignmentBaseline: 'middle'
});

const LinhaCinza = styled('line')({
  stroke: '#555',
  strokeWidth: '3',
  strokeLinecap: 'round',
});

const LinhaCinzaExterna = styled(LinhaCinza)({
  strokeWidth: '4',
});

const IconeBarril = ({ capacidade_max, medida_atual }) => {
  const level = (medida_atual / capacidade_max) * 100;

  return (
    <BarrilContainer>
      <rect x="10" y="0" width="53" height="100" fill="#34495e" stroke="#2c3e50" strokeWidth="2" />
      <Liquido y={`${100 - level}`} height={`${level}`} />
      <LinhaCinzaExterna x1="8" y1="0" x2="65" y2="0" />
      <LinhaCinza x1="8" y1="20" x2="65" y2="20" />
      <LinhaCinza x1="8" y1="50" x2="65" y2="50" />
      <LinhaCinza x1="8" y1="80" x2="65" y2="80" />
      <LinhaCinzaExterna x1="8" y1="100" x2="65" y2="100" />
      <TextoPorcentagem x="36.5" y="50">
        {Math.round(level)}%
      </TextoPorcentagem>
    </BarrilContainer>
  );
};

export default IconeBarril;
