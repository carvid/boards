# frozen_string_literal: true

require 'rails_helper'
require 'requests/schemas'

describe 'Columns endpoints', type: :request do
  let(:column) { create(:column) }
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
          expect(json).to eq(task_schema)
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
end

