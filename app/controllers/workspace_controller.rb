# frozen_string_literal: true

class WorkspaceController < ApplicationController
  layout 'workspace'

  before_action :set_boards
  before_action :set_current_board

  def index
    @workspace_props = build_workspace_props
  end

  private

  def set_boards
    @boards = Board.all
  end

  def set_current_board
    @current_board = @boards.first
  end

  def build_workspace_props
    {
      boards: {
        current: @current_board&.id,
      },
    }
  end
end

