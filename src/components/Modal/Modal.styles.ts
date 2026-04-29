import styled, { css, keyframes } from "styled-components";
import { colors, radius, spacing, fontSizes } from "../../consts";
import type { ModalSizes } from "./Modal.types";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(-8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const scaleOut = keyframes`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to { opacity: 0; transform: scale(0.95) translateY(-8px); }
`;

export const Backdrop = styled.div<{ $closing: boolean }>`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: ${({ $closing }) => ($closing ? fadeOut : fadeIn)} 0.15s ease
      forwards;
  `;

export const Dialog = styled.div<{ $size: ModalSizes; $closing: boolean }>`
  position: relative;
  background: ${colors.neutral[0]};
  border-radius: ${radius.md};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  animation: ${({ $closing }) => ($closing ? scaleOut : scaleIn)} 0.15s ease
    forwards;

  ${({ $size }) => $size === "sm" && css`width: min(400px, 90vw);`}
  ${({ $size }) => $size === "md" && css`width: min(560px, 90vw);`}
  ${({ $size }) => $size === "lg" && css`width: min(720px, 90vw);`}
  ${({ $size }) =>
    $size === "fullscreen" &&
    css`
      width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0;
    `}
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[2]};
  padding: ${spacing[4]} ${spacing[4]};
  border-bottom: 1px solid ${colors.neutral[200]};
  flex-shrink: 0;
`;

export const ModalTitle = styled.h2`
  flex: 1;
  font-size: ${fontSizes.lg};
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: ${radius.md};
  font-size: 20px;
  line-height: 1;
  color: ${colors.neutral[500]};

  &:hover {
    background-color: ${colors.neutral[100]};
    color: ${colors.neutral[900]};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const ModalBody = styled.div`
  padding: ${spacing[4]};
  overflow-y: auto;
  flex: 1;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${spacing[2]};
  padding: ${spacing[4]};
  border-top: 1px solid ${colors.neutral[200]};
  flex-shrink: 0;
`;
