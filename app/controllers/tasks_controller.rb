# frozen_string_literal: true

class TasksController < ApiController
  before_action :find_column, only: [:create]

  def create
    @task = @column.tasks.create!(task_params)
    json_response(@task, :created)
  end

  def update
    @task = Task.find(params[:id])
    @task.update!(task_params)
    json_response(@task, :accepted)
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy!
    json_response(nil, :no_content)
  end

  private

  def task_params
    params.permit(:title, :position)
  end

  def find_column
    @column = Column.find(params[:column_id])
  end
end

