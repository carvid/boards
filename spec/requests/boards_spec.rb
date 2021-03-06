# frozen_string_literal: true

require 'rails_helper'
require 'requests/schemas'

describe 'Boards endpoints', type: :request do
  include_context 'response schemas'

  let(:board) { create(:board) }
  let(:board_id) { board.id }

  describe 'GET /boards' do
    let!(:boards) { create_list(:board, 10) }

    before { get '/boards' }

    it 'returns and array of boards' do
      expect(json.size).to eq(10)
      json.each { |board| expect(board).to match(board_schema) }
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /boards/:id' do
    before { get "/boards/#{board_id}" }

    context 'when the record exists' do
      it 'returns the board' do
        expect(json).to match(board_schema)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:board_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /boards' do
    before { post '/boards', params: request_body }

    context 'when the request is valid' do
      let(:request_body) { { title: 'Board 1' } }

      it 'creates a board' do
        expect(json).to match(board_schema)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:request_body) { { title: nil } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PATCH /boards/:id' do
    before { patch "/boards/#{board_id}", params: request_body }

    let(:request_body) { { title: 'Board Updated' } }

    context 'when the record does not exist' do
      let(:board_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when the board record exists' do
      it 'update the board' do
        expect(json).to match(board_schema)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /boards/:id' do
    before { delete "/boards/#{board_id}" }

    context 'when the record does not exist' do
      let(:board_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when the board record exists' do
      it 'return no content' do
        expect(response.body).to eq('')
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'POST /boards/:id/columns' do
    before { post "/boards/#{board_id}/columns", params: request_body }

    let(:request_body) { {} }

    context 'when the record does not exist' do
      let(:board_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when the board record exists' do
      context 'when the request is valid' do
        let(:request_body) { { title: 'Column 1', position: 1 } }

        it 'creates a columns' do
          expect(json).to match(column_schema)
        end

        it 'returns status code 201' do
          expect(response).to have_http_status(201)
        end
      end

      context 'when the request is invalid' do
        let(:request_body) { { title: 'Column 1' } }

        it 'returns status code 422' do
          expect(response).to have_http_status(422)
        end
      end
    end
  end
end

