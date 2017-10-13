# frozen_string_literal: true

class ColumnsController < ApiController
  before_action :find_board, only: [:create]

  def create
    @column = @board.columns.create!(column_params)
    json_response(@column, :created)
  end

  def show
    @column = Column.find(params[:id])
    json_response(@column)
  end

  def update
    @column = Column.find(params[:id])
    @column.update!(column_params)
    json_response(@column, :accepted)
  end

  def destroy
    @column = Column.find(params[:id])
    @column.destroy!
    json_response(nil, :no_content)
  end

  private

  def column_params
    params.permit(:title, :position)
  end

  def find_board
    @board = Board.find(params[:board_id])
  end
end

