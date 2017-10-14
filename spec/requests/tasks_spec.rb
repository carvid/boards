# frozen_string_literal: true

require 'rails_helper'
require 'requests/schemas'

describe 'Tasks endpoints', type: :request do
  include_context 'response schemas'

  let(:request_body) { {} }
  let(:board) do
    board = Board.new(title: 'Board Sample')
    board.save!
    board
  end
  let(:column) do
    column = board.columns.create!(title: 'Column 1', position: 1)
    column
  end
  let(:task) do
    task = column.tasks.create!(title: 'Task 1', position: 1)
    task
  end
  let(:task_id) { task.id }

  describe 'PATCH /tasks/:id' do
    before { patch "/tasks/#{task_id}", params: request_body }

    context 'when the column record exists' do
      let(:request_body) { { title: 'Task Updates', position: 2 } }

      it 'returns the column' do
        expect(json).to match(task_schema)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      let(:request_body) { { title: nil, position: nil } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /tasks/:id' do
    before { delete "/tasks/#{task_id}" }

    context 'when the record does not exist' do
      let(:task_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when the column record exists' do
      let(:request_body) { { title: 'Column Update', position: 1 } }

      it 'return no content' do
        expect(response.body).to eq('')
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end
end

