import React from 'react';
import { Window, WindowHeader, WindowContent, Button, Fieldset } from 'react95';
import styled from 'styled-components';
import Image from 'next/image';

const StyledWindow = styled(Window)`
  width: 400px;
  max-width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  width: 80px;
  text-align: center;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const IconsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const IconLabel = styled.span`
  font-size: 12px;
  margin-top: 5px;
  color: black;
`;

type DesktopIconsProps = {
  onOpenWindow: (windowName: string) => void;
  onClose: () => void;
};

const DesktopIcons = ({ onOpenWindow, onClose }: DesktopIconsProps) => {
  const icons = [
    { name: 'Projects', icon: '/icons/folder.ico' },
    { name: 'Social Media', icon: '/icons/network.ico' },
    // Add more icons as needed
  ];

  return (
    <StyledWindow>
      <WindowHeader className="window-title">
        <span>My Computer</span>
        <Button onClick={onClose} style={{ position: 'absolute', right: '10px', top: '10px' }}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <IconsGrid>
          {icons.map((item) => (
            <IconContainer 
              key={item.name} 
              onClick={() => onOpenWindow(item.name)}
            >
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={32} 
                height={32}
                style={{ imageRendering: 'pixelated' }}
              />
              <IconLabel>{item.name}</IconLabel>
            </IconContainer>
          ))}
        </IconsGrid>
      </WindowContent>
    </StyledWindow>
  );
};

export default DesktopIcons;
