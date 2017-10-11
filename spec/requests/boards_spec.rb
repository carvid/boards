# frozen_string_literal: true

require 'rails_helper'
require 'requests/schemas'

describe 'Boards endpoints', type: :request do
  describe 'GET /boards' do
    let!(:boards) { create_list(:board, 10) }

    before { get '/boards' }

    it 'returns and array of boards' do
      expect(json.size).to eq(10)
      json.each { |board| expect(board).to eq(schema) }
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /boards/:id' do
    let(:board) { create(:board) }

    before { get "/boards/#{board.id}" }

    context 'when the record exists' do
      it 'returns the board' do
        expect(json).to eq(board_schema)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      before { board.destroy }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /boards' do
    let(:request_body) { { title: 'Board 1' } }

    context 'when the request is valid' do
      before { post '/boards', params: request_body }

      it 'creates a board' do
        expect(json).to eq(board_schema)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/boards', params: { title: 'Board 1' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end
end

