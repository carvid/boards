/* eslint-disable import/prefer-default-export */

import { WORKSPACE_NAME_UPDATE, BOARD_SELECT } from '../constants/workspaceConstants';

export const updateName = (text) => ({
  type: WORKSPACE_NAME_UPDATE,
  text,
});

export const onBoardSelect = () => ({
  type: BOARD_SELECT,
});
