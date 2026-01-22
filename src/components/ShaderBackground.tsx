import React from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

const ShaderBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ShaderGradient
          animate="on"
          brightness={1}
          cAzimuthAngle={170}
          cDistance={4.49}
          cPolarAngle={70}
          cameraZoom={1}
          color1="#fef7ff"
          color2="#000000"
          color3="#000000"
          envPreset="city"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          reflection={0.1}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          type="waterPlane"
          uDensity={1.2}
          uSpeed={0.1}
          uStrength={3.4}
        />
      </ShaderGradientCanvas>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
};

export default ShaderBackground;