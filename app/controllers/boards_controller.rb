# frozen_string_literal: true

class BoardsController < ApiController

  def create
    @board = Board.new(board_params)
    @board.save!
    json_response(@board, :created)
  end

  def index
    @boards = Board.all
    json_response(@boards)
  end

  def show
    @board = Board.find(params[:id])
    json_response(@board)
  end

  private

  def board_params
    params.permit(:title)
  end
end

