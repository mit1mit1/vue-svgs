export interface ArmPosition {
  elbowXPercent: number;
  elbowYUp: boolean;
  wristXPercent: number;
  wristYUp: boolean;
  fingertipXPercent: number;
  fingertipYUp: boolean;
}

export const availableArmPositions: Record<string, ArmPosition> = {
  leftArmWave: {
    elbowXPercent: -0.9,
    elbowYUp: true,
    wristXPercent: -0.3,
    wristYUp: true,
    fingertipXPercent: -0.05,
    fingertipYUp: true,
  },
  rightArmWave: {
    elbowXPercent: 0.9,
    elbowYUp: true,
    wristXPercent: 0.25,
    wristYUp: true,
    fingertipXPercent: 0.1,
    fingertipYUp: true,
  },
  leftArmCasual: {
    elbowXPercent: -0.45,
    elbowYUp: false,
    wristXPercent: -0.25,
    wristYUp: false,
    fingertipXPercent: -0.2,
    fingertipYUp: false,
  },
  rightArmCasual: {
    elbowXPercent: 0.45,
    elbowYUp: false,
    wristXPercent: 0.25,
    wristYUp: false,
    fingertipXPercent: 0.2,
    fingertipYUp: false,
  },
  leftArmExcited: {
    elbowXPercent: -0.87,
    elbowYUp: true,
    wristXPercent: -0.2,
    wristYUp: true,
    fingertipXPercent: -0.05,
    fingertipYUp: true,
  },
  rightArmExcited: {
    elbowXPercent: 0.93,
    elbowYUp: true,
    wristXPercent: 0.1,
    wristYUp: true,
    fingertipXPercent: 0.02,
    fingertipYUp: true,
  },
  rightArmPointUp: {
    elbowXPercent: 0.65,
    elbowYUp: false,
    wristXPercent: 0.35,
    wristYUp: true,
    fingertipXPercent: 0.1,
    fingertipYUp: true,
  },
  leftArmStretchDown: {
    elbowXPercent: -0.35,
    elbowYUp: false,
    wristXPercent: -0.3,
    wristYUp: false,
    fingertipXPercent: -0.2,
    fingertipYUp: false,
  },
  rightArmHoldMid: {
    elbowXPercent: 0.35,
    elbowYUp: false,
    wristXPercent: 0.9,
    wristYUp: false,
    fingertipXPercent: -0.8,
    fingertipYUp: true,
  },
  rightArmHoldDown: {
    elbowXPercent: 0.4,
    elbowYUp: false,
    wristXPercent: 0.55,
    wristYUp: false,
    fingertipXPercent: 0.2,
    fingertipYUp: true,
  },
  leftArmShrug: {
    elbowXPercent: -0.5,
    elbowYUp: false,
    wristXPercent: -0.45,
    wristYUp: true,
    fingertipXPercent: -0.9,
    fingertipYUp: true,
  },
  rightArmShrug: {
    elbowXPercent: 0.5,
    elbowYUp: false,
    wristXPercent: 0.45,
    wristYUp: true,
    fingertipXPercent: 0.9,
    fingertipYUp: true,
  },
  leftArmAcrossChest: {
    elbowXPercent: -0.6,
    elbowYUp: false,
    wristXPercent: 0.98,
    wristYUp: true,
    fingertipXPercent: 0.98,
    fingertipYUp: false,
  },
  rightArmAcrossChest: {
    elbowXPercent: 0.6,
    elbowYUp: false,
    wristXPercent: -0.98,
    wristYUp: true,
    fingertipXPercent: -0.98,
    fingertipYUp: false,
  },
  rightArmPointingNorthEast: {
    elbowXPercent: 0.4,
    elbowYUp: false,
    wristXPercent: 0.6,
    wristYUp: true,
    fingertipXPercent: 0.76,
    fingertipYUp: true,
  },
  rightArmPointingSouthEast: {
    elbowXPercent: 0.4,
    elbowYUp: false,
    wristXPercent: 0.8,
    wristYUp: false,
    fingertipXPercent: 0.96,
    fingertipYUp: false,
  },
};

export interface LegPosition {
  kneeXPercent: number;
  kneeYUp: boolean;
  ankleXPercent: number;
  ankleYUp: boolean;
}

export const availableLegPositions: Record<string, LegPosition> = {
  leftCasualStance: {
    kneeXPercent: -0.3,
    kneeYUp: false,
    ankleXPercent: -0.2,
    ankleYUp: false,
  },
  rightCasualStance: {
    kneeXPercent: 0.3,
    kneeYUp: false,
    ankleXPercent: 0.2,
    ankleYUp: false,
  },
};

export interface LimbPositions {
  leftArmPosition: ArmPosition;
  rightArmPosition: ArmPosition;
  leftLegPosition: LegPosition;
  rightLegPosition: LegPosition;
}

export const availableLimbPositions: Record<string, LimbPositions> = {
  leftArmComment: {
    leftArmPosition: {
      elbowXPercent: -0.3,
      elbowYUp: false,
      wristXPercent: -0.2,
      wristYUp: false,
      fingertipXPercent: 0.4,
      fingertipYUp: true,
    },
    rightArmPosition: {
      elbowXPercent: 0.5,
      elbowYUp: false,
      wristXPercent: 0.2,
      wristYUp: false,
      fingertipXPercent: 0.4,
      fingertipYUp: false,
    },
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  excited: {
    leftArmPosition: availableArmPositions.leftArmExcited,
    rightArmPosition: availableArmPositions.rightArmExcited,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  leftHandWave: {
    leftArmPosition: availableArmPositions.leftArmWave,
    rightArmPosition: availableArmPositions.rightArmCasual,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandWave: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmWave,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandPointUp: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmPointUp,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  handsDown: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmCasual,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  shrug: {
    leftArmPosition: availableArmPositions.leftArmShrug,
    rightArmPosition: availableArmPositions.rightArmShrug,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  handsFolded: {
    leftArmPosition: availableArmPositions.leftArmAcrossChest,
    rightArmPosition: availableArmPositions.rightArmAcrossChest,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandHoldingMid: {
    leftArmPosition: availableArmPositions.leftArmStretchDown,
    rightArmPosition: availableArmPositions.rightArmHoldMid,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandHoldingDown: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmHoldDown,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandPointingSouthEast: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmPointingSouthEast,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },

  rightHandPointingNorthEast: {
    leftArmPosition: availableArmPositions.leftArmCasual,
    rightArmPosition: availableArmPositions.rightArmPointingNorthEast,
    leftLegPosition: availableLegPositions.leftCasualStance,
    rightLegPosition: availableLegPositions.rightCasualStance,
  },
};
