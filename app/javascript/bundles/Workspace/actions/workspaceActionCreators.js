/* eslint-disable import/prefer-default-export */

import { WORKSPACE_NAME_UPDATE } from '../constants/workspaceConstants';

export const updateName = (text) => ({
  type: WORKSPACE_NAME_UPDATE,
  text,
});
