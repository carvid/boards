# frozen_string_literal: true

class ColumnsController < ApiController
  before_action :find_board

  def create
    @column = @board.columns.create!(column_params)
    json_response(@column, :created)
  end

  private

  def column_params
    params.permit(:title, :position)
  end

  def find_board
    @board = Board.find(params[:board_id])
  end
end

