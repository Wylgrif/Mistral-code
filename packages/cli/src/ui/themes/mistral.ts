/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from './theme.js';

const mistral: ColorsTheme = {
  type: 'light',
  Background: '#fff',
  Foreground: '#e10500',
  LightBlue: '#ff8205',
  AccentBlue: '#fa500f',
  AccentPurple: '#ff8205',
  AccentCyan: '#fa500f',
  AccentGreen: '#ffaf00',
  AccentYellow: '#ffd800',
  AccentRed: '#e10500',
  Comment: '#ffaf00',
  Gray: '#c0c0c0',
  GradientColors: ['#ffd800', '#e10500'],
};

export const Mistral: Theme = new Theme(
  'Mistral',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: mistral.Background,
      color: mistral.Foreground,
    },
    'xml .hljs-meta': {
      color: mistral.Gray,
    },
    'hljs-comment': {
      color: mistral.Comment,
    },
    'hljs-quote': {
      color: mistral.Comment,
    },
    'hljs-tag': {
      color: mistral.AccentPurple,
    },
    'hljs-attribute': {
      color: mistral.AccentPurple,
    },
    'hljs-keyword': {
      color: mistral.AccentPurple,
    },
    'hljs-selector-tag': {
      color: mistral.AccentPurple,
    },
    'hljs-literal': {
      color: mistral.AccentPurple,
    },
    'hljs-name': {
      color: mistral.AccentPurple,
    },
    'hljs-variable': {
      color: mistral.AccentCyan,
    },
    'hljs-template-variable': {
      color: mistral.AccentCyan,
    },
    'hljs-code': {
      color: mistral.AccentRed,
    },
    'hljs-string': {
      color: mistral.AccentRed,
    },
    'hljs-meta-string': {
      color: mistral.AccentRed,
    },
    'hljs-regexp': {
      color: mistral.AccentPurple,
    },
    'hljs-link': {
      color: mistral.AccentPurple,
    },
    'hljs-title': {
      color: mistral.AccentCyan,
    },
    'hljs-symbol': {
      color: mistral.AccentCyan,
    },
    'hljs-bullet': {
      color: mistral.AccentCyan,
    },
    'hljs-number': {
      color: mistral.AccentCyan,
    },
    'hljs-section': {
      color: mistral.AccentYellow,
    },
    'hljs-meta': {
      color: mistral.AccentYellow,
    },
    'hljs-class .hljs-title': {
      color: mistral.AccentPurple,
    },
    'hljs-type': {
      color: mistral.AccentPurple,
    },
    'hljs-built_in': {
      color: mistral.AccentPurple,
    },
    'hljs-builtin-name': {
      color: mistral.AccentPurple,
    },
    'hljs-params': {
      color: mistral.AccentPurple,
    },
    'hljs-attr': {
      color: mistral.AccentYellow,
    },
    'hljs-subst': {
      color: mistral.Foreground,
    },
    'hljs-formula': {
      backgroundColor: '#eee',
      fontStyle: 'italic',
    },
    'hljs-addition': {
      backgroundColor: '#baeeba',
    },
    'hljs-deletion': {
      backgroundColor: '#ffc8bd',
    },
    'hljs-selector-id': {
      color: mistral.AccentYellow,
    },
    'hljs-selector-class': {
      color: mistral.AccentYellow,
    },
    'hljs-doctag': {
      fontWeight: 'bold',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
  },
  mistral,
);
