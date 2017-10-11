# frozen_string_literal: true

class TasksController < ApiController
  before_action :find_column

  def create
    @task = @column.tasks.create!(task_params)
    json_response(@task, :created)
  end

  private

  def task_params
    params.permit(:title, :position)
  end

  def find_column
    @column = Column.find(params[:column_id])
  end
end

