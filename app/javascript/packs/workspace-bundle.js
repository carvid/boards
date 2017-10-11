import ReactOnRails from 'react-on-rails';

import WorkspaceApp from '../bundles/Workspace/startup/WorkspaceApp';

// This is how react_on_rails can see the Workspace in the browser.
ReactOnRails.register({
  WorkspaceApp,
});
