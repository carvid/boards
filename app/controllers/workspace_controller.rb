# frozen_string_literal: true

class WorkspaceController < ApplicationController
  layout 'workspace'

  def index
    @workspace_props = { name: 'Stranger' }
  end
end

