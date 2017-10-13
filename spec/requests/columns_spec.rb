# frozen_string_literal: true

require 'rails_helper'
require 'requests/schemas'

describe 'Columns endpoints', type: :request do
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
  let(:column_id) { column.id }

  describe 'POST /columns/:id/tasks' do
    before { post "/columns/#{column_id}/tasks", params: request_body }

    let(:request_body) { {} }

    context 'when the column record does not exist' do
      let(:column_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when the column record exists' do
      context 'when the request is valid' do
        let(:request_body) { { title: 'Task 1', position: 1 } }

        it 'creates a task' do
          expect(json).to match(task_schema)
        end

        it 'returns status code 201' do
          expect(response).to have_http_status(201)
        end
      end

      context 'when the request is invalid' do
        let(:request_body) { { title: 'Task 1' } }

        it 'returns status code 422' do
          expect(response).to have_http_status(422)
        end
      end
    end
  end

  describe 'PATCH /columns/:id' do
    before { patch "/columns/#{column_id}", params: request_body }

    context 'when the column record exists' do
      let(:request_body) { { title: 'Column Update', position: 2 } }

      it 'returns the column' do
        expect(json).to match(column_schema)
      end

      it 'returns status code 202' do
        expect(response).to have_http_status(202)
      end
    end

    context 'when the request is invalid' do
      let(:request_body) { { title: nil, position: nil } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /columns/:id' do
    before { delete "/columns/#{column_id}" }

    context 'when the record does not exist' do
      let(:column_id) { -1 }

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

