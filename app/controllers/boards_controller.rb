# frozen_string_literal: true

class BoardsController < ApiController

  def create
    @board = Board.new(board_params)
    @board.save!
    json_response(@board, :created)
  end

  def index
    @boards = Board.all
    json_response(@boards, :ok, 'columns,columns.tasks')
  end

  def show
    @board = Board.find(params[:id])
    json_response(@board)
  end

  def update
    @board = Board.find(params[:id])
    @board.update!(board_params)
    json_response(@board, :accepted)
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy!
    json_response(nil, :no_content)
  end

  private

  def board_params
    params.permit(:title)
  end
end

