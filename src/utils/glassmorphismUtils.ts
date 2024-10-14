import { alpha } from '@mui/material/styles';

interface GlassmorphismOptions {
  blur?: number;
  saturation?: number;
  opacity?: number;
}

export const createGlassmorphismEffect = (
  baseColor: string,
  options: GlassmorphismOptions = {}
) => {
  const {
    blur = 10,
    saturation = 100,
    opacity = 0.6
  } = options;

  return {
    backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
    backgroundColor: alpha(baseColor, opacity),
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };
};