import React from 'react';

export const RocketIcon = ({ size = 48, color = "#7C3AED" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Corpo e bico do foguete (mais limpo e unificado) */}
    <path
      d="M13.43 10.74l7.14-7.14M16.48 2.52l4.98 4.98M21.5 7.5L16.48 2.52M10.26 13.57L3.12 20.71M9.91 14.19c-1.35 1.35-3.52 1.35-4.87 0l-1.35-1.35c-1.35-1.35-1.35-3.52 0-4.87L11 3.5c1.35-1.35 3.52-1.35 4.87 0l1.35 1.35c1.35 1.35 1.35 3.52 0 4.87L10.26 13.57z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Estabilizadores laterais simplificados */}
    <path
      d="M5.38 18.62L3.5 20.5M18.62 5.38L20.5 3.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Janela circular central */}
    <path
      d="M12.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BriefcaseIcon = ({ size = 48, color = "#7C3AED" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Corpo da pasta: forma retangular arredondada */}
    <path
      d="M8 21h8c3.08 0 4-1 4-4V9c0-3-1-4-4-4H8c-3.08 0-4 1-4 4v8c0 3 1 4 4 4z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Alça superior (simples e centralizada) */}
    <path
      d="M15 5v-.8c0-1.12 0-1.68-.218-2.108.192-.377.497-.682.874-.874C9.52 2 10.08 2 11.2 2h1.6c1.12 0 1.68 0 2.108.218.377.192.682.497.874.874.218.428.218.988.218 2.108V5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Linha de fecho central */}
    <path
      d="M2 10h20"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Fecho central mais definido */}
    <path
      d="M12 13v2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChartIcon = ({ size = 48, color = "#7C3AED" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Contorno do gráfico (quadrado/tela) - mantido para enquadramento */}
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* O gráfico de linha ascendente simplificado */}
    <path
      d="M6 17v-4l4-3 4 3 4-4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ponto final (destaque) */}
    <path
      d="M18 9h.01M6 17h.01M10 13h.01M14 16h.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const WarningIcon = ({ size = 48, color = "#7C3AED" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Triângulo de aviso: forma limpa e centrada */}
    <path
      d="M12 4L2 20h20L12 4z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Traço de exclamação */}
    <path
      d="M12 10V14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ponto de exclamação */}
    <path
      d="M11.995 17h.009"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);