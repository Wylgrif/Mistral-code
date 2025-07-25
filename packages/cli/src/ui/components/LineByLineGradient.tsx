/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Text } from 'ink';

interface LineByLineGradientProps {
  text: string;
  colors: string[];
}

export const LineByLineGradient: React.FC<LineByLineGradientProps> = ({ text, colors }) => {
  const lines = text.split('\n');
  let colorIndex = 0;

  return (
    <Box flexDirection="column">
      {lines.map((line, index) => {
        // Only apply color and increment index for non-empty lines
        const color = line.trim() !== '' ? colors[colorIndex++ % colors.length] : undefined;
        return (
          <Text key={index} color={color}>
            {line}
          </Text>
        );
      })}
    </Box>
  );
};